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
    cn
} from "@/lib/utils"
import {
    Button
} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Check,
    ChevronsUpDown
} from "lucide-react"

const formSchema = z.object({
    team: z.string().min(1),
    lead: z.string()
});

export default function AddNewTeamForm() {
    const languages = [{
        label: "English",
        value: "en"
    },
        {
            label: "French",
            value: "fr"
        },
        {
            label: "German",
            value: "de"
        },
        {
            label: "Spanish",
            value: "es"
        },
        {
            label: "Portuguese",
            value: "pt"
        },
        {
            label: "Russian",
            value: "ru"
        },
        {
            label: "Japanese",
            value: "ja"
        },
        {
            label: "Korean",
            value: "ko"
        },
        {
            label: "Chinese",
            value: "zh"
        },
    ] as
        const;
    const form = useForm < z.infer < typeof formSchema >> ({
        resolver: zodResolver(formSchema),

    })

    function onSubmit(values: z.infer < typeof formSchema > ) {
        try {
            console.log(values);
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

                <FormField
                    control={form.control}
                    name="team"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Team name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="eg. Dev team"

                                    type="text"
                                    {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lead"
                    render={({ field }) => (
                        <FormItem className="flex flex-col w-full">
                            <FormLabel>Team lead</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild className="w-full">
                                    <FormControl className="w-full">
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-full justify-between",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value
                                                ? languages.find(
                                                    (language) => language.value === field.value
                                                )?.label
                                                : "Select team lead"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="p-0 w-full"> {/* Full width for content */}
                                    <Command className="w-full">
                                        <CommandInput placeholder="Search user..." />
                                        <CommandList className="w-full">
                                            <CommandEmpty>No language found.</CommandEmpty>
                                            <CommandGroup className="w-full">
                                                {languages.map((language) => (
                                                    <CommandItem
                                                        className="w-full"
                                                        value={language.label}
                                                        key={language.value}
                                                        onSelect={() => {
                                                            form.setValue("lead", language.value);
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                language.value === field.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                        {language.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}