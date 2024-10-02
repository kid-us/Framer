import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(86,1,245)", "rgb(6,10,25)", "rgb(1,245,13"]
  );
  return (
    <div>
      <div className=" space-y-2">
        <motion.div
          style={{
            scaleX,
            transformOrigin: "left",
            background,
          }}
          className="sticky top-0 w-[100%] h-5"
        ></motion.div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa
          recusandae expedita ipsum eligendi, quibusdam illum, laboriosam, qui
          assumenda consequatur voluptatibus nemo. Quae quia quas placeat
          corrupti officia, tempore aliquam minus eveniet? In molestias odio
          nisi deleniti sequi atque ipsa vitae saepe nesciunt, vero dolore a
          quidem voluptatum corrupti earum? Voluptates, molestiae! Quam sunt,
          optio eius repellendus nemo impedit assumenda nesciunt doloribus cum
          recusandae ea fugiat temporibus perspiciatis eveniet minima maiores
          omnis quos quisquam? Explicabo asperiores beatae dolorum repellendus
          dolore exercitationem ex eos? Nam quis itaque error nihil delectus
          amet earum reiciendis incidunt laborum voluptatibus reprehenderit,
          temporibus quisquam et corrupti.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa
          recusandae expedita ipsum eligendi, quibusdam illum, laboriosam, qui
          assumenda consequatur voluptatibus nemo. Quae quia quas placeat
          corrupti officia, tempore aliquam minus eveniet? In molestias odio
          nisi deleniti sequi atque ipsa vitae saepe nesciunt, vero dolore a
          quidem voluptatum corrupti earum? Voluptates, molestiae! Quam sunt,
          optio eius repellendus nemo impedit assumenda nesciunt doloribus cum
          recusandae ea fugiat temporibus perspiciatis eveniet minima maiores
          omnis quos quisquam? Explicabo asperiores beatae dolorum repellendus
          dolore exercitationem ex eos? Nam quis itaque error nihil delectus
          amet earum reiciendis incidunt laborum voluptatibus reprehenderit,
          temporibus quisquam et corrupti.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa
          recusandae expedita ipsum eligendi, quibusdam illum, laboriosam, qui
          assumenda consequatur voluptatibus nemo. Quae quia quas placeat
          corrupti officia, tempore aliquam minus eveniet? In molestias odio
          nisi deleniti sequi atque ipsa vitae saepe nesciunt, vero dolore a
          quidem voluptatum corrupti earum? Voluptates, molestiae! Quam sunt,
          optio eius repellendus nemo impedit assumenda nesciunt doloribus cum
          recusandae ea fugiat temporibus perspiciatis eveniet minima maiores
          omnis quos quisquam? Explicabo asperiores beatae dolorum repellendus
          dolore exercitationem ex eos? Nam quis itaque error nihil delectus
          amet earum reiciendis incidunt laborum voluptatibus reprehenderit,
          temporibus quisquam et corrupti.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa
          recusandae expedita ipsum eligendi, quibusdam illum, laboriosam, qui
          assumenda consequatur voluptatibus nemo. Quae quia quas placeat
          corrupti officia, tempore aliquam minus eveniet? In molestias odio
          nisi deleniti sequi atque ipsa vitae saepe nesciunt, vero dolore a
          quidem voluptatum corrupti earum? Voluptates, molestiae! Quam sunt,
          optio eius repellendus nemo impedit assumenda nesciunt doloribus cum
          recusandae ea fugiat temporibus perspiciatis eveniet minima maiores
          omnis quos quisquam? Explicabo asperiores beatae dolorum repellendus
          dolore exercitationem ex eos? Nam quis itaque error nihil delectus
          amet earum reiciendis incidunt laborum voluptatibus reprehenderit,
          temporibus quisquam et corrupti.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa
          recusandae expedita ipsum eligendi, quibusdam illum, laboriosam, qui
          assumenda consequatur voluptatibus nemo. Quae quia quas placeat
          corrupti officia, tempore aliquam minus eveniet? In molestias odio
          nisi deleniti sequi atque ipsa vitae saepe nesciunt, vero dolore a
          quidem voluptatum corrupti earum? Voluptates, molestiae! Quam sunt,
          optio eius repellendus nemo impedit assumenda nesciunt doloribus cum
          recusandae ea fugiat temporibus perspiciatis eveniet minima maiores
          omnis quos quisquam? Explicabo asperiores beatae dolorum repellendus
          dolore exercitationem ex eos? Nam quis itaque error nihil delectus
          amet earum reiciendis incidunt laborum voluptatibus reprehenderit,
          temporibus quisquam et corrupti.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa
          recusandae expedita ipsum eligendi, quibusdam illum, laboriosam, qui
          assumenda consequatur voluptatibus nemo. Quae quia quas placeat
          corrupti officia, tempore aliquam minus eveniet? In molestias odio
          nisi deleniti sequi atque ipsa vitae saepe nesciunt, vero dolore a
          quidem voluptatum corrupti earum? Voluptates, molestiae! Quam sunt,
          optio eius repellendus nemo impedit assumenda nesciunt doloribus cum
          recusandae ea fugiat temporibus perspiciatis eveniet minima maiores
          omnis quos quisquam? Explicabo asperiores beatae dolorum repellendus
          dolore exercitationem ex eos? Nam quis itaque error nihil delectus
          amet earum reiciendis incidunt laborum voluptatibus reprehenderit,
          temporibus quisquam et corrupti.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa
          recusandae expedita ipsum eligendi, quibusdam illum, laboriosam, qui
          assumenda consequatur voluptatibus nemo. Quae quia quas placeat
          corrupti officia, tempore aliquam minus eveniet? In molestias odio
          nisi deleniti sequi atque ipsa vitae saepe nesciunt, vero dolore a
          quidem voluptatum corrupti earum? Voluptates, molestiae! Quam sunt,
          optio eius repellendus nemo impedit assumenda nesciunt doloribus cum
          recusandae ea fugiat temporibus perspiciatis eveniet minima maiores
          omnis quos quisquam? Explicabo asperiores beatae dolorum repellendus
          dolore exercitationem ex eos? Nam quis itaque error nihil delectus
          amet earum reiciendis incidunt laborum voluptatibus reprehenderit,
          temporibus quisquam et corrupti.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa
          recusandae expedita ipsum eligendi, quibusdam illum, laboriosam, qui
          assumenda consequatur voluptatibus nemo. Quae quia quas placeat
          corrupti officia, tempore aliquam minus eveniet? In molestias odio
          nisi deleniti sequi atque ipsa vitae saepe nesciunt, vero dolore a
          quidem voluptatum corrupti earum? Voluptates, molestiae! Quam sunt,
          optio eius repellendus nemo impedit assumenda nesciunt doloribus cum
          recusandae ea fugiat temporibus perspiciatis eveniet minima maiores
          omnis quos quisquam? Explicabo asperiores beatae dolorum repellendus
          dolore exercitationem ex eos? Nam quis itaque error nihil delectus
          amet earum reiciendis incidunt laborum voluptatibus reprehenderit,
          temporibus quisquam et corrupti.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et culpa
          recusandae expedita ipsum eligendi, quibusdam illum, laboriosam, qui
          assumenda consequatur voluptatibus nemo. Quae quia quas placeat
          corrupti officia, tempore aliquam minus eveniet? In molestias odio
          nisi deleniti sequi atque ipsa vitae saepe nesciunt, vero dolore a
          quidem voluptatum corrupti earum? Voluptates, molestiae! Quam sunt,
          optio eius repellendus nemo impedit assumenda nesciunt doloribus cum
          recusandae ea fugiat temporibus perspiciatis eveniet minima maiores
          omnis quos quisquam? Explicabo asperiores beatae dolorum repellendus
          dolore exercitationem ex eos? Nam quis itaque error nihil delectus
          amet earum reiciendis incidunt laborum voluptatibus reprehenderit,
          temporibus quisquam et corrupti.
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimation;
