import { Group, Popover, Pill, Stack, Text } from "@mantine/core";
import { useState, useEffect } from "react";
import { initialData } from "./InitialData";

// Utility function to shuffle an array
function shuffleArray(array: any[]) {
  return array
    .map((item) => ({ ...item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => {
      delete item.sort;
      return item;
    });
}

export function SkillsBlock() {
  // Shuffle the data on page load
  const [data, setData] = useState<
    { title: string; categories: string[]; experience: number | string }[]
  >([]);

  useEffect(() => {
    setData(shuffleArray(initialData));
  }, []);

  // Extract unique categories
  const uniqueCategories = Array.from(
    new Set(initialData.flatMap((skill) => skill.categories))
  );

  // State to track the hovered category, hovered skill, and its color
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredCategoryColor, setHoveredCategoryColor] = useState<string>("");

  return (
    <Stack gap="md">
      <Group justify={"center"} mb={30}>
        {/* Render large category pills with sequential colors */}
        {uniqueCategories.map((category, index) => {
          const categoryColor = `var(--mantine-color-primary-${index % 10})`;

          return (
            <Pill
              key={category}
              size="xl"
              fw={700}
              onMouseEnter={() => {
                setHoveredCategory(category);
                setHoveredCategoryColor(categoryColor);
              }}
              onMouseLeave={() => {
                setHoveredCategory(null);
                setHoveredCategoryColor("");
              }}
              style={{
                cursor: "pointer",
                background: categoryColor,
                color: "var(--mantine-color-gray-9",
              }}
            >
              {category}
            </Pill>
          );
        })}
      </Group>
      <Group justify={"center"}>
        {/* Render smaller skill pills */}
        {data.map((skill) => (
          <Pill
            key={skill.title}
            onMouseEnter={() => setHoveredSkill(skill.title)}
            onMouseLeave={() => setHoveredSkill(null)}
            size="sm"
            style={{
              backgroundColor: skill.categories.includes(hoveredCategory ?? "")
                ? hoveredCategoryColor
                : `var(--mantine-color-gray-1)`,
              color: skill.categories.includes(hoveredCategory ?? "")
                ? "white"
                : `var(--mantine-color-gray-7)`,
            }}
          >
            {skill.title}
          </Pill>
          // <Popover
          //   key={skill.title}
          //   width={200}
          //   position="bottom"
          //   withArrow
          //   shadow="md"
          //   opened={hoveredSkill === skill.title} // Only open the popover if this skill is hovered
          // >
          //   <Popover.Target>
          //     <Pill
          //       onMouseEnter={() => setHoveredSkill(skill.title)}
          //       onMouseLeave={() => setHoveredSkill(null)}
          //       size="sm"
          //       style={{
          //         backgroundColor: skill.categories.includes(
          //           hoveredCategory ?? ""
          //         )
          //           ? hoveredCategoryColor
          //           : `var(--mantine-color-gray-1)`,
          //         color: skill.categories.includes(hoveredCategory ?? "")
          //           ? "white"
          //           : `var(--mantine-color-gray-7)`,
          //       }}
          //     >
          //       {skill.title}
          //     </Pill>
          //   </Popover.Target>
          //   <Popover.Dropdown
          //     style={{ pointerEvents: "none", textAlign: "center" }}
          //   >
          //     <Text size="sm">Experience: {skill.experience} projects</Text>
          //   </Popover.Dropdown>
          // </Popover>
        ))}
      </Group>
    </Stack>
  );
}
