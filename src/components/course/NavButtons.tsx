function NavButtons({ sections }) {
  return (
    <div className="flex space-x-6 ps-6 my-6">
      {sections.map((section, i) =>
        section.href ? (
          <a
            className="flex items-center justify-between rounded-full border border-gray-300 p-2"
            title={section.name}
            href={section.href}
            key={i}
          >
            {section.icon}
          </a>
        ) : (
          <button
            className="flex items-center justify-between rounded-full border border-gray-300 p-2"
            onClick={() => section.onClick()}
            title={section.name}
            key={i}
          >
            {section.icon}
          </button>
        )
      )}
    </div>
  );
}

export default NavButtons;
