import { useEffect, useRef } from "react";

export default function useTitle({title}){
    const prevTitle = useRef(document.title)
    useEffect(() =>{
        const previousTtitle = prevTitle.current;

        document.title = `Despacho Jurídico S&J | ${title}`;
        return() => document.title = previousTtitle
    }, [title])
    
}