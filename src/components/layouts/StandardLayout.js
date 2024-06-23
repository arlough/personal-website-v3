
export function StandardLayout({ title, children}) {
    return (
      <div
      className="flex flex-col space-y-4 text-white"
      >
          <h1 className="text-4xl font-black">
            {title}
          </h1>
          <div className="flex flex-col space-y-8 ">{children}</div>
      </div>
    )
  }