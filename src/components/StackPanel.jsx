export default function StackPanel({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm h-fit sticky top-24 w-[300px] mx-auto lg:ml-auto">
      <div>
        <h3 className="font-bold text-lg text-gray-900">Your Stack</h3>
        <p className="text-sm text-gray-400">
          {stack.length} Technology Selected
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="mt-3 text-center py-8 px-3 text-gray-400 text-sm border border-dashed border-gray-200 rounded-xl">
          Your stack is empty.
          <br />
          Add technologies to get started!
        </div>
      ) : (
        <div className="mt-3 flex flex-col gap-2 max-h-[280px] overflow-y-auto stack-scroll pr-1">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-3"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center p-1.5 shrink-0">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm truncate text-gray-900">
                  {tech.name}
                </p>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={"Remove " + tech.name}
                className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-4 w-full text-sm font-semibold text-red-500 border border-red-200 hover:border-red-300 hover:bg-red-50 py-2.5 rounded-xl transition-colors"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
