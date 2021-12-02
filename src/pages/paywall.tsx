import { useSession, signIn, signOut } from "next-auth/client";


const Paywall = () => {
    const [session,loading] = useSession();
    
    if(session){
        return(
            <>
            Signed in as {session.user.email}
            <button onClick={()=> signOut()}>SignOut</button>

            </>
        
        );   
        }
    return(
        <>
            <button onClick={()=> signIn()}>Sign in</button>
        
        </>
    );

}

export default Paywall;