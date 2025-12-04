import Link from "next/link";

export default function char_bot() {
    return (
        <main>
            <div>Character chatbot with dynamic routing (later)</div>    

            <ul className="mt-10">
                <li><Link href="/char-bot/1">temp 1</Link></li>
                <li><Link href="/char-bot/2">temp 2</Link></li>
                <li><Link href="/char-bot/3">temp 3</Link></li>
                <li><Link href="/char-bot/4">temp 4</Link></li>
            </ul>
        </main>
    )
}