import React, { useState } from "react";
import Phrase from "./Phrase.js";
import axios from "axios";

export default function PhraseGenerator() {
    const [PhraseA, setPhraseA] = useState({ content: "", author: "" })

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    const getRandomPhrase = async () => {
        try {
            setLoading (true);
            const response = await axios.get("https://api.quotable.io/random");
            const data = response.data;
            setPhraseA({
                content: data.content,
                author: data.author,
            });
        } catch (error) {
            setError("Ocorreu um Erro")
            console.error("Ocorreu um Erro", error);
    } finally {
        setLoading(false);
    }

    if (loading){
        return (
            <div className="min-h20">
                <p className="text-lg">loading...</p>
            </div>
        );
    }

    if (error) {
        return (
        <div className="min-h-20">
            <p className="text-lg">{error}</p>
        </div>
        );
    }
}

return (
    <div className="min-h-20 flex flex-col gap-4 items-start">
        <Phrase text={PhraseA.content} author={PhraseA.author} />

        <button
        className="bg-gradient-to-r from-teal-500 to-sky-500 p-2 rounded-lg shadow-md text-white"
        onClick={getRandomPhrase}
        >
            Nova Frase 
        </button>

    </div>
)}

