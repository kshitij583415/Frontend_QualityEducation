import React from "react";
import { Input, Img, Text } from "./..";

export default function SignUpInputfield({ email = "Email", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-[12%] md:w-full">
        <div className="flex flex-row justify-start w-full">
          <Text as="p" className="!text-gray-900 !font-medium">
            {email}
          </Text>
        </div>
      </div>
      <Input
        color="white_A700"
        size="xs"
        name="email"
        placeholder="user@example.com"
        prefix={<Img src="images/email.png" alt="message / 24 / Outline" />}
        className="w-full gap-[15px] rounded-tr-[10px] rounded-br-[10px] border-gray-300 border border-solid"
      />
    </div>
  );
}
