interface MovieProps {
  params: {id:string}
}

export default function Movie({params:{id}}:MovieProps) { 

  return <h1>Movie {id}</h1>
}