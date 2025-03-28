import { TagInput } from "emblor";
import React from "react";
import { useForm } from "react-hook-form";

interface Tag {
    id: string;
    label: string;
}

const TagsInput: React.FC = () => {
    const { setValue, register } = useForm();
    const [tags, setTags] = React.useState<Tag[]>([]);
    const [activeTagIndex, setActiveTagIndex] = React.useState<number | null>(null);

    return (
        <TagInput
            {...register("topics")}
            placeholder="Enter a topic"
            tags={tags}
            setTags={(newTags) => {
                setTags(newTags);
                setValue("topics", newTags as [Tag, ...Tag[]]); // Ensure this is compatible with expected types
            }}
            activeTagIndex={activeTagIndex}
            setActiveTagIndex={setActiveTagIndex}
        />
    );
};

export default TagsInput;
