import Link from "next/link";
import React from "react";

export default function DropdownCard({ genres, type }) {
  return (
    <div>
      <ul>
        {genres.map((item) => (
          <Link
            key={item.id}
            href={`/genre/${type}/${item.id}`}
            className="flex"
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
