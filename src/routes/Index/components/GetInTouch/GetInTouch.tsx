import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
} from "@mantine/core";
import { useState } from "react";
import { ContactIconsList } from "./ContactIcons";
import classes from "./GetInTouch.module.css";

export function GetInTouch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    let response = await fetch(
      "https://renswiebengadevelopment.onrender.com/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      }
    );

    let result = await response.json();

    if (result.code === 200) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <Paper shadow="md" radius="xl">
      <div className={classes.wrapper}>
        <div className={classes.innerContent}>
          <div className={classes.contacts}>
            <Text fz="lg" fw={700} className={classes.title} c="#fff">
              Contact information
            </Text>
            <ContactIconsList />
          </div>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>
            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput
                  label="Your name"
                  placeholder="Your name"
                  value={name}
                  onChange={(event) => setName(event.currentTarget.value)}
                />
                <TextInput
                  label="Your email"
                  placeholder="yourname@domain.com"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                />
              </SimpleGrid>
              <TextInput
                mt="md"
                label="Subject"
                placeholder="Subject"
                required
                value={subject}
                onChange={(event) => setSubject(event.currentTarget.value)}
              />
              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
                value={message}
                onChange={(event) => setMessage(event.currentTarget.value)}
              />
              <Group justify="flex-end" mt="md">
                <Button type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </div>
    </Paper>
  );
}
