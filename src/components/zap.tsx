import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import Zap from './../img/zap.png'

export default function ZapComponent() {

  return (
    <Link id='zap' href='https://wa.me/5511994354243' >
      <Box id='zap' position='fixed' right='10px' bottom='10px' cursor='pointer'>
        <Image id='zap' src={Zap} alt='whatsapp' width={50} height={50} />
      </Box>
    </Link>
  )
}