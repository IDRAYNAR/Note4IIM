"use client"

import React from "react";
import {useSearchParams} from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import {supabase} from "@/supabase";
import { useEffect, useState } from "react";

const singleNote = () => {
    const [note, setNote] = useState(null);
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {
        const fetchNote = async () => {
            let { data, error } = await supabase
                    .from('N4I_Lessons')
                    .select('*')
                    .eq('id', id)

            if (error) {
                console.error("Error fetching note:", error)
            } else {
                if (data && data.length > 0) {
                    setNote(data[0])
                } else {
                    console.error("No note found with id:", id)
                }
            }
        }

        fetchNote().then(r => r)
    }, [id]);

    if (!note) {
        return <div>Loading...</div>;
    }

    return (
            <div className="containerElement wrapper -medium single-note">
                <h1>{note.name}</h1>
                <hr/>
                <div className="lessonContainer">
                    <ReactMarkdown children={note.content}/>
                </div>
                <hr/>
                <Link className="btn-edit" href={{
                    pathname: '/edit-note',
                    query: {
                        id: id,
                    },
                }} legacyBehavior>Modifier la note</Link>
            </div>
    );
};

export default singleNote;