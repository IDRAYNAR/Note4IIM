// page.jsx
"use client"
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { supabase } from '@/supabase'
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const Page = () => {
    const router = useRouter();
    const [lesson, setLesson] = useState(null)

    useEffect(() => {
        if (router.isReady) {
            const { id } = router.query;

            const fetchLesson = async () => {
                let { data, error } = await supabase
                        .from('N4I_Lessons')
                        .select('*')
                        .eq('id', id)

                if (error) {
                    console.error("Error fetching lecon:", error)
                } else {
                    setLesson(data[0])
                }
            }

            fetchLesson()
        }
    }, [router.isReady])

    if (!lesson) {
        return <div>Loading...</div>
    }

    return (
            <div className="containerElement wrapper -medium single-note">
                <h1>{lesson.name}</h1>
                <hr />
                <div className="lessonContainer">
                    <ReactMarkdown children={lesson.content} />
                </div>
                <hr />
                <Link href={`/edit-note/${lesson.id}`}><a className="btn-edit">Modifier la note</a></Link>
            </div>
    );
};

export default Page;