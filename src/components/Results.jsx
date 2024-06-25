
export default function Results({ results }) {
  return (
    <div>
      {
        results.map(elm => {
          return(
            <div key={elm.id}>
            <h2>{elm.original_title}</h2>
          </div>
          )
        })
      }
    </div>
  )
}
