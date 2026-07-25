export default async function student({params}: {
    params: Promise<{student: string}>;
}) {
    const student = await params;
    return (
        <div>
            hello am BATMAN
        </div>
    );
}