export default async function getUserPost(userId: string) {
    // static site generation (SSG), por defecto es no-cache para evitar repetir peticiones
    // server side rendering (SSR),por defecto es force-cache para evitar repetir peticiones
    // el problema es si la data esta cambiando constamente por eso se utiliza no-store
    // para lo mejor de los dos mundos utiliza incremental static regeneration (ISR), con next : {revalidate: 60} mostrar la data por 60 segundos antes de revalidar si hay nueva data
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {next : {revalidate: 60}})

    if(!res.ok) undefined

    return res.json()
}