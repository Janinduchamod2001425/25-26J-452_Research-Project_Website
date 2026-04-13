import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  senderName?: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  senderName,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {senderName || senderEmail}</Preview>

      <Tailwind>
        <Body className="bg-gray-50 text-gray-900 font-sans">
          <Container className="max-w-lg mx-auto my-0">
            {/* Main Card */}
            <Container className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
              {/* Header with Blue/Indigo Gradient */}
              <Section className="bg-blue-900 px-6 py-6 text-center">
                <svg
                  className="w-8 h-8 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                </svg>
                <Heading className="text-4xl font-bold text-white m-0 mb-1">
                  FabricVision
                </Heading>

                <Text className="text-blue-100 text-sm font-medium m-0">
                  AI-Based Fabric Inspection & Quality Monitoring System
                </Text>
              </Section>

              {/* Notification Header */}
              <Section className="px-6 py-5 border-b border-gray-100">
                <Heading className="text-lg font-semibold text-gray-900 m-0 text-left">
                  New Research Inquiry
                </Heading>

                <Text className="text-gray-600 text-sm mt-1 text-left">
                  Submitted via FabricVision Research Website
                </Text>
              </Section>

              {/* Content Area */}
              <Section className="px-6 py-6">
                {/* Home */}
                <Text className="text-gray-700 text-sm leading-relaxed mb-6">
                  You have received a new message related to the FabricVision
                  research project. This may include inquiries regarding
                  collaboration, technical discussions, or general feedback.
                </Text>

                {/* Sender Info Card */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
                  <Text className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                    SENDER INFORMATION
                  </Text>
                  {senderName && (
                    <Text className="text-gray-900 text-sm mb-1">
                      <strong>Name:</strong> {senderName}
                    </Text>
                  )}
                  <Text className="text-gray-900 text-sm">
                    <strong>Email:</strong>{" "}
                    <Link
                      href={`mailto:${senderEmail}`}
                      className="text-blue-600"
                    >
                      {senderEmail}
                    </Link>
                  </Text>
                </div>

                {/* Message Card */}
                <div className="mb-6">
                  <Text className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                    MESSAGE CONTENT
                  </Text>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <Text className="text-gray-800 text-sm leading-relaxed whitespace-pre-line">
                      {message}
                    </Text>
                  </div>
                </div>

                {/* Divider */}
                <Hr className="border-gray-100 my-6" />

                {/* CTA */}
                <Section className="text-center">
                  <Text className="text-gray-600 text-sm mb-4">
                    You may respond directly to this inquiry for further
                    discussion or collaboration.
                  </Text>

                  <Link
                    href={`mailto:${senderEmail}${
                      senderName
                        ? `?subject=Re: Inquiry from ${senderName}`
                        : ""
                    }`}
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-md"
                  >
                    Reply to {senderName || "Sender"}
                  </Link>
                </Section>
              </Section>

              {/* Footer */}
              <Section className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                <div className="text-center">
                  <Text className="text-gray-500 text-xs mb-3">
                    This message was submitted through the FabricVision research
                    project website.
                  </Text>

                  <Text className="text-gray-400 text-xs mt-3">
                    © {new Date().getFullYear()} FabricVision Research Project
                    <br />
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </Text>
                </div>
              </Section>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
