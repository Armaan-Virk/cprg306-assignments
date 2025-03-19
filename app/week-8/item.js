export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="p-6 border border-gray-300 shadow-md flex justify-between items-center bg-white hover:bg-gray-50 transition duration-300 cursor-pointer"
      onClick={() => onSelect(name)}
    >
      <div>
        <p className="text-xl font-bold text-gray-800">{name}</p>
        <p className="text-sm text-gray-400 italic">Category: {category}</p>
      </div>
      <span className="text-sm font-semibold text-purple-800 px-3 py-1">Qty: {quantity}</span>
    </li>
  );
}