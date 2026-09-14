export default function TechnologyCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col shadow-sm card-hover hover:border-pink-300 hover:shadow-pink-100 transition-all">
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center p-2">
          <img
            src={icon}
            alt={name + " icon"}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-50 text-pink-500">
          {badge}
        </span>
      </div>

      <h3 className="mt-3 text-base font-bold text-gray-900">{name}</h3>
      <p className="mt-1 text-xs text-gray-500 flex-1">{description}</p>

      <div className="mt-3 flex items-center flex-wrap gap-1.5">
        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-gray-200 text-gray-600">
          {category}
        </span>
        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-gray-200 text-gray-600">
          {difficulty}
        </span>
        <span className="ml-auto flex items-center gap-1 text-xs font-semibold text-yellow-500">
          ⭐ {rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        className={
          isAdded
            ? "mt-3 w-full py-2 rounded-md font-semibold text-xs bg-gray-100 text-gray-500"
            : "mt-3 w-full py-2 rounded-md font-semibold text-xs bg-ink text-white hover:bg-gray-800 transition-colors"
        }
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
