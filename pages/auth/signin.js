import { getProviders, signIn as signIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

const signIn = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-start py-2 px-14 text-center">
        <img src="/Logo.png" alt="Camagru logo" className="w-80 mt-20" />
        <p className="font-xs italic">
          Camagru helps you connect and share with the people in your life.
        </p>
        <div className="mt-20">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() =>
                  signIntoProvider(provider.id, { callbackUrl: "/" })
                }
                class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500"
              >
                <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-500 via-gray-800 to-pink-700"></span>
                <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span class="relative text-white">
                  Sign in with {provider.name}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
