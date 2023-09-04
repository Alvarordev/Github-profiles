type Props = {
    children: string | JSX.Element | JSX.Element[] 
}

const Container = ({children}: Props) => {
    return ( 
        <main className="max-w-xl mx-auto flex flex-col items-center justify-center h-full gap-4">
            {children}
        </main>
     );
}
 
export default Container;