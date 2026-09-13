export default function StackPanel({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm h-fit sticky top-24">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-lg text-gray-900">Your Stack</h3>
          <p className="text-sm text-gray-400">
            {stack.length} Technology Selected
          </p>
        </div>
        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs font-semibold text-red-500 hover:text-red-600"
          >
            Remove All
          </button>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-3 max-h-[420px] overflow-y-auto stack-scroll pr-1">
        {stack.length === 0 ? (
          <div className="text-center py-10 text-gray-400 text-sm">
            Your stack is empty.
            <br />
            Add technologies to get started!
          </div>
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 bg-gray-50 rounded-xl p-3"
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
          ))
        )}
      </div>
    </aside>
  );
}
