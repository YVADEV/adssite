import { permanentRedirect } from "next/navigation";

import { EMERGENCY_HREF } from "@/config/services";

export default function UrgenteStomatologiceRedirect() {
  permanentRedirect(EMERGENCY_HREF);
}
