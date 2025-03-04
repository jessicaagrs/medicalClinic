export default function SpecialtyFilter() {
  return (
    <div className="mt-12 flex flex-col items-center gap-5 p-8 text-custom80">
      <p className=" font-semibold text-base">
        Você pode estar procurando por estas categorias:
      </p>
      <ul className="flex flex-wrap  gap-5 text-sm">
        <li className="bg-custom40 px-3 py-1 rounded-md">
          <button className="flex items-center gap-3">
            Neurologista <span>X</span>
          </button>
        </li>
        <li className="bg-custom40 px-3 py-1 rounded-md">
          <button className="flex items-center gap-3">
            Dermatologista <span>X</span>
          </button>
        </li>
        <li className="bg-custom40 px-3 py-1 rounded-md">
          <button className="flex items-center gap-3">
            Cardiologista <span>X</span>
          </button>
        </li>
        <li className="bg-custom40 px-3 py-1 rounded-md">
          <button className="flex items-center gap-3">
            Ortopedista <span>X</span>
          </button>
        </li>
        <li className="bg-custom40 px-3 py-1 rounded-md">
          <button className="flex items-center gap-3">
            Oftalmologista <span>X</span>
          </button>
        </li>
        <li className="bg-custom40 px-3 py-1 rounded-md">
          <button className="flex items-center gap-3">
            Pediatria <span>X</span>
          </button>
        </li>
        <li className="bg-custom40 px-3 py-1 rounded-md">
          <button className="flex items-center gap-3">
            Reumatologista <span>X</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
