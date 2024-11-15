/* eslint-disable react/no-unescaped-entities */
import type { Joke } from "@prisma/client";
import { Form, Link } from "@remix-run/react";

export function JokeDisplay({
    canDelete = true,
    isOwner,
    joke,
}: {
    canDelete?: boolean;
    isOwner: boolean;
    joke: Pick<Joke, "content" | "name">;
}) {
    return (
        <div>
            <p>Here's your hilarious joke:</p>
            <p>{joke.content}</p>
            <Link to=".">"{joke.name}" Permalink</Link>
            {isOwner ? (

                <>
                    <Link to="update">
                        <button 
                            className="button"
                        >
                            Update
                        </button>
                    </Link>
                    <Form
                        action="destroy"
                        method="post"
                        onSubmit={(event) => {
                          const response = confirm(
                            "Please confirm you want to delete this record."
                          );
                          if (!response) {
                            event.preventDefault();
                          }
                        }}
                    >
                        <button
                            className="button"
                            disabled={!canDelete}
                            name="intent"
                            type="submit"
                            value="delete"
                        >
                            Delete
                        </button>
                    </Form>
                </>
            ) : null}
        </div>
    );
}
