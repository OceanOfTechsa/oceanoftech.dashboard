"use client"

import {
    toast
} from "sonner"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Button
} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import {UserTypeEnum} from "@/db/enums/userTypeEnum";
import { RiAdminLine } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiUserSettingsLine } from "react-icons/ri";
import {UserRoleEnum} from "@/db/enums/UserRoleEnum";
import Image from "next/image";
import {useState} from "react";
import Loader from "@/components/loader";
import {invite} from "@/app/(portal)/(CardPages)/team/add-user/actions";
import {GetAllTeams} from "@/db/actions/GetAllTeams";

const formSchema = z.object({
    email: z.string().email("Provide a valid email").min(6).max(100),
    phone: z.string().min(1),
    type: z.string(),
    role: z.string(),
    team: z.string(),
    position: z.string().min(1)
});


const teams = await GetAllTeams(); //TODO Move to a sever component to avoid waterfall
export default function AddNewUserForm() {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm < z.infer < typeof formSchema >> ({
        resolver: zodResolver(formSchema),
    })

    async function onSubmit(values: z.infer < typeof formSchema > ) {
        try {
            setIsLoading(true)
            await invite(values)
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
            );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto pb-10 pt-5 w-full">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 sm:col-span-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>User work email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="username@oceanoftechsa.com"
                                            type="email"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="0812550538"
                                            type=""
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4 w-full">
                    <div className="col-span-12 sm:col-span-6 w-full">
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Type</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Seletc user type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value={UserTypeEnum.ADMIN.toString()} >< RiAdminLine /> Admin Type</SelectItem>
                                            <SelectItem value={UserTypeEnum.USER.toString()} >< RiUserLine /> User Type</SelectItem>
                                            <SelectItem value={UserTypeEnum.TEST.toString()} ><RiUserSettingsLine /> Test Type</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>Portal permissions.
                                        {field.value === UserTypeEnum.ADMIN.toString() && " Full access"}
                                        {field.value === UserTypeEnum.USER.toString() && " Basic access"}
                                        {field.value === UserTypeEnum.TEST.toString() && " Test access"}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-12 sm:col-span-6 w-full">
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Role</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="select a user role" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value={UserRoleEnum.ADMIN.toString()} >< RiAdminLine /> Admin Role</SelectItem>
                                            <SelectItem value={UserRoleEnum.USER.toString()} >< RiUserLine /> User Role</SelectItem>
                                            <SelectItem value={UserRoleEnum.TEST.toString()} ><RiUserSettingsLine /> Test Role</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>Portal permissions.
                                        {field.value === UserRoleEnum.ADMIN.toString() && " Full access"}
                                        {field.value === UserRoleEnum.USER.toString() && " Basic access"}
                                        {field.value === UserRoleEnum.TEST.toString() && " Test access"}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                </div>

                <FormField
                    control={form.control}
                    name="team"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Team</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select team" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {
                                        teams?.map(team => <SelectItem value={team.id} key={team.id}><Image src={team.image ? team.image : "/teams.webp"} alt={team.name} width={100} height={100} className="rounded-full size-6"/> {team.name}</SelectItem>)
                                    }
                                </SelectContent>
                            </Select>
                            <FormDescription>Assign this member to a specific team.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Position</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""

                                    type="text"
                                    {...field} />
                            </FormControl>
                            <FormDescription>Separate each position with a ( / ).</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full sm:w-auto cursor-pointer transition-all duration-500 ease-in-out" disabled={isLoading}>
                    {!isLoading ? <>Submit</> : <><Loader />Submitting</>}
                </Button>
            </form>
        </Form>
    )
}