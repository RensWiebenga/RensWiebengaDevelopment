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
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Send message");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);

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

    if (result.status === "Message Sent") {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }

    setTimeout(() => {
      setLoading(false);
      setButtonText("Message sent!");
    }, 1000);

    setTimeout(() => {
      setButtonText("Send new message");
    }, 5000);
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
                  placeholder="John Doe"
                  value={name}
                  onChange={(event) => setName(event.currentTarget.value)}
                />
                <TextInput
                  label="Your email"
                  placeholder="johndoe@domain.com"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                />
              </SimpleGrid>
              <TextInput
                mt="md"
                label="Subject"
                placeholder="New project, collaboration, etc."
                required
                value={subject}
                onChange={(event) => setSubject(event.currentTarget.value)}
              />
              <Textarea
                mt="md"
                label="Your message"
                placeholder="I'd like to discuss..."
                minRows={3}
                value={message}
                onChange={(event) => setMessage(event.currentTarget.value)}
              />
              <Group justify="flex-end" mt="md">
                <Button
                  type="submit"
                  className={classes.control}
                  loading={loading}
                >
                  {buttonText}
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </div>
    </Paper>
  );
}
