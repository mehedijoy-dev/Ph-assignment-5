export default function TechnologyCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col shadow-sm card-hover">
      <div className="flex items-start justify-between">
        <div className="w-11 h-11 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center p-2">
          <img
            src={icon}
            alt={name + " icon"}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-50 text-pink-500">
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-gray-900">{name}</h3>
      <p className="mt-1 text-sm text-gray-500 flex-1">{description}</p>

      <div className="mt-4 flex items-center flex-wrap gap-2">
        <span className="text-xs font-medium px-3 py-1 rounded-full border border-gray-200 text-gray-600">
          {category}
        </span>
        <span className="text-xs font-medium px-3 py-1 rounded-full border border-gray-200 text-gray-600">
          {difficulty}
        </span>
        <span className="ml-auto flex items-center gap-1 text-sm font-semibold text-yellow-500">
          ⭐ {rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        className={
          isAdded
            ? "mt-5 w-full py-2.5 rounded-md font-semibold text-sm bg-gray-100 text-gray-500"
            : "mt-5 w-full py-2.5 rounded-md font-semibold text-sm bg-ink text-white hover:bg-gray-800 transition-colors"
        }
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
