import { Button } from "antd";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import Link from "next/link";

export default function DetailPage() {
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            draggable={false}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta
          title="Ini adalah halaman detail"
          description="www.instagram.com"
        />
      </Card>

      <Link href="/">
        <Button variant="solid" color="volcano">
          Ke halaman home
        </Button>
      </Link>
    </>
  );
}
