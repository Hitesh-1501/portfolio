const FloatingTech = () => {
  return (
    <>
      <div
        className="
          absolute
          -top-4
          -left-8
          bg-slate-900
          border
          border-green-500/20
          px-4
          py-2
          rounded-xl
        "
      >
        Kotlin
      </div>

      <div
        className="
          absolute
          top-10
          -right-10
          bg-slate-900
          border
          border-green-500/20
          px-4
          py-2
          rounded-xl
        "
      >
        Android
      </div>

      <div
        className="
          absolute
          bottom-8
          -left-10
          bg-slate-900
          border
          border-green-500/20
          px-4
          py-2
          rounded-xl
        "
      >
        Firebase
      </div>

      <div
        className="
          absolute
          bottom-0
          -right-8
          bg-slate-900
          border
          border-green-500/20
          px-4
          py-2
          rounded-xl
        "
      >
        Compose
      </div>
    </>
  )
}

export default FloatingTech