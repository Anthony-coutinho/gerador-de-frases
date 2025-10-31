import React, { useState } from "react";
import Phrase from "./Phrase.js";

export default function PhraseGenerator() {
    const [PhraseA, setPhraseA] = useState({ content: "Uma vida não examinada não vale ser vivida", author: "Sócrates" })

return (
    <div className="min-h-20 flex flex-col gap-4 items-start">
        <Phrase text={PhraseA.content} PhraseAuthor={PhraseA.author} />

        <button
        className="bg-gradient-to-r from-teal-500 to-sky-500 p-2 rounded-lg shadow-md text-white">
            Nova Frase 
        </button>

    </div>
)}
