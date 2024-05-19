
export function BlockQuote({ citation, children}) {
    return (
      <blockquote className="p-2 my-2 border-l-2"
      cite={citation}>
        <div className="ml-5 italic ">{children}</div>
        
      </blockquote>
    )
  }