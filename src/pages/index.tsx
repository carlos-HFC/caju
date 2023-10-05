import { Select } from "@/components/Select";
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ marginTop: 100 }}>
      <Select label="Select" defaultValue="" placeholder="escolha" value="1">
        <option value="1">teste</option>
        <option value="1">teste</option>
        <option value="1">teste</option>
        <option value="1">teste</option>
      </Select>
      <Select disabled label="Select" defaultValue="" placeholder="escolha">
        <option value="1">teste</option>
        <option value="1">teste</option>
        <option value="1">teste</option>
        <option value="1">teste</option>
      </Select>
    </div>
  );
}
