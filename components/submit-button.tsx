"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <Button type='submit'>{pending
            ? <>
                <svg className="motion-reduce:hidden animate-spin ..." viewBox="0 0 24 24">Creating...</svg>
            </>
            : "Create Project"}</Button>
    )
}

export default SubmitButton;