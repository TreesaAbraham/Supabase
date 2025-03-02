import supabase from "./Config/supabaseClient";

const Home = () => {
    console.log(supabase)
    return ( 
        <div className = 'page home'>

            <h1>Homepage</h1>
        </div>
     );
}
 
export default Home;