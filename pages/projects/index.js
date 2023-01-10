import Link from "next/link";
import Image from "next/image";
import { projects } from "../../library/data";

export default function Projects() {
  return (
    <>
      <h2>My Projectss</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <Link href={project.link} target="_blank">
              <h2>{project.name}</h2>
              <Image
                src={project.cover}
                alt={project.name}
                width={100}
                height={100}
              ></Image>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
