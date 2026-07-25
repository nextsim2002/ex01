export default async function hello({params}: {
    params: Promise<{
        name: string;
        age: string;
    }>
}) {
    const {name, age} = await params;
    return (
        <div>
            hello my name is {name} and i am {age} years old
        </div>
    );
}   