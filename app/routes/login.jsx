import { Layout } from "~/components/layout";

export default function Login() {
    return <Layout>
        <div className="h-full flex justify-center items-center flex-col gap-y-4">
        <h2 className="text-5xl font-extrabold text-green-300">Welcome here!</h2>
        <p className="text-2xl font-bold text-gray-300">Please login to continue</p>

        <form className="rounded-2xl bg-gray-200 p-6 w-96">
  

  
    <label htmlFor="email" className="text-blue-600 font-semibold">
        Email
    </label>
    <input type="text" id="email"  className="w-full p-2 rounded-xl my-2" />
    <label htmlFor="password" className="text-blue-600 font-semibold">
        Password

    </label>
    <input type="password" id="password"  className="w-full p-2 rounded-xl my-2" />
    <div className="w-full text-center">
        <input 
        type="submit"
        className="rounded-xl bg-blue-300px-3 py-2 text-white font-semibold transition duration-300 hover:bg-blue-400 hover:-translate-x-1"
        value="sign in"
        />
    </div>
</form>
  </div>
 </Layout>
  }
  