export default async function char_bot_each({ params }: { params: Promise<{ id: string }>}) {
    const { id } = await params;

    return (
        <main>
            <div>Character bot</div>
            <div>Character id = {id}</div>
        </main>
    )
}