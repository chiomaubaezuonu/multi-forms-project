"use client"
import Image from "next/image";
import bgDesktop from "../public/images/bgDesktop.svg"
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';



type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


export default function Home() {
  return (
    <div className=" bg-[#f0f6ff] flex min-h-screen flex-col items-center justify-between p-24">
      <main className="p-5 md:rounded md:bg-white md:shadow-lg w-10/12 ">
        <div className="flex flex-col gap-4 md:flex-row">
          {/* for mobile */}
          {/* <div className="md:hidden w-full h-[172px] absolute top-0 bg-mobile left-0 bg-cover -z-10">

              </div> */}
          {/* sidebar */}
          <div className="bg-desktop bg-cover">
            <Image src={bgDesktop} alt="desktop background" />
          </div>
          {/* form */}
          <div className="rounded-lg shadow-lg md:shadow-none z-10 flex-1 p-5 bg-white ">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <h1>Personal Info</h1>
              <p>Please provide your name, email address, and phone number.</p>
              <Form.Item<FieldType>
                label="Name"
                name="username"
                rules={[{ required: true, message: 'e.g. Stephen King' }]}
              >
                <Input placeholder="e.g. Stephen King" />
              </Form.Item>

              <Form.Item<FieldType>
                label="Email Address"
                // name="email"
                rules={[{ required: true, message: 'e.g. Stephen King' }]}
              >
                <Input placeholder="e.g. stephenking@lorem.com" />
              </Form.Item>

              <Form.Item<FieldType>
                label="Phone Number"
                // name="phone"
                rules={[{ required: true, message: 'e.g. Stephen King' }]}
              >
                <Input placeholder="e.g. +1 234 567 890" />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Next Step
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
}
