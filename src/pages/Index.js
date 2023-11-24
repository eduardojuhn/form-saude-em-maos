export function Index() {
    return (
        <>
            <div className="form bg-white w-2/5 border rounded">
                <form className="mx-6 mb-4 m-6">
                    <div className="grid gap-2 mb-4 md:grid-cols-2">
                        <div className="relative">
                            <input type="email" id="floating_outlined" className="focus:outline-none border-2 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg focus:ring-2 focus:ring-blue-500  peer" placeholder=" " />
                            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Email
                            </label>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="relative mb-3">
                            <input type="password" id="floating_outlined" className="focus:outline-none border-2 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg focus:ring-2 focus:ring-blue-500  peer" placeholder=" " />
                            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Senha
                            </label>
                        </div>
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-0 focus:ring-blue-300   " required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 ">Lembrar senha</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">Submit</button>
                </form>
            </div>
        </>
    )
}