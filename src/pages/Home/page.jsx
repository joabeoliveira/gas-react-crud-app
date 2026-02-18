import { useState } from "react";
import { Button } from "antd";
import SmartTable from "@/components/SmartTable";
import schema from "./schema";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <h1 style={{ marginBottom: 20, fontSize: '2rem', fontWeight: 'bold' }}>Bom dia!</h1>
      <Button
        type="primary"
        onClick={() => setIsModalOpen(true)}
        style={{ marginBottom: 10 }}
      >
        New Record
      </Button>
      <SmartTable schema={schema} open={isModalOpen} setOpen={setIsModalOpen} />
    </>
  );
};
export default Home;
