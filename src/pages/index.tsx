import { Box, Grid, Text, Input, Checkbox, Button, Table, Tr, Th, Flex, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, AspectRatio, Radio, Stack, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import ButtonChakra from '../components/button'
import ChakraInput from '../components/input'
import TableLine from '../components/tableLine'

import phone from './../img/multiplata.png'
import TableIMG from './../img/tabela.png'
import func from './../img/funcao-02.png'
import bgGrenn from './../img/cap-bg-02.jpg'
import bgImg from './../img/cap-bg-01.jpg'
import call from './../img/renomed.png'

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import { FormEvent, useEffect, useState } from 'react'
import ZapComponent from '../components/zap'
import axios from 'axios'
import Link from 'next/link'
import Router from 'next/router'

export default function Index() {
  const [open, setOpen] = useState(false)
  const [close, setClose] = useState<any>(false)

  const [name, setName] = useState<String>()
  const [number, setNumber] = useState<Number>()
  const [branches, setBranches] = useState<Number>()
  const [email, setEmail] = useState<String>()

  function onClose() {
    setOpen(false)
  }



  // useEffect(() => {
  //   setOpen(true)
  // }, [])


  async function handleForm(e: FormEvent) {

    e.preventDefault()
    const data = {
      emailTo: ['luana@simcompany.com.br', 'hubner@simcompany.com.br', 'edgard@simcompany.com.br'],
      title: 'Captação de leads por campanha Simcompany',
      domain: 'camp.simcompany.com.br',
      name,
      phone: number,
      branches,
      email
    }

    await axios.post(`https://main-form.herokuapp.com/ticonnected`, data)

    await Router.push('/obrigado')
  }

  return (
    <Box as='main'>

      <Box id='bg-img-1' style={{ backgroundImage: `url('${bgImg.src}')` }}>

        <Grid py={{ base: '65px', md: '100px' }} gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} maxW='1300px' m={{ base: '0 5%', md: '0 10%', xl: '0 auto' }}>
          <Box id='form' as='form' onSubmit={handleForm}>
            <Text as='h1' fontSize='45px' lineHeight='52px'>
              <Text as='span' color='white'>O MELHOR SISTEMA DE TELEFONIA </Text>
              EMPRESARIAL DO MERCADO ESTÁ AQUI! PABX EM NUVEM COM
              <Text as='span' color='white'> AVALIAÇÃO GRATUITA!</Text>
            </Text>

            <Text my='8'>Aproveite e ganhe <Text as='span' color='white'>aparelho IP grátis</Text> em pedidos a cima de 3 ramais, faça sua simulação agora!</Text>
            <Grid
              gridTemplateColumns='1fr 1fr'
              gridTemplateRows='1fr 1fr'
              columnGap='20px'
              rowGap='10px'
              my={{ base: '10px', sm: '20px' }}
            >
              <ChakraInput placeholder='Nome' type='text' onChange={(e) => { setName(e.target.value) }} />
              <ChakraInput placeholder='Numero' type='text' onChange={(e) => { setNumber(Number(e.target.value)) }} />
              <ChakraInput placeholder='Quantidade de ramais' type='number' onChange={(e) => { setBranches(Number(e.target.value)) }} />
              <ChakraInput placeholder='email' type='email' onChange={(e) => { setEmail(e.target.value) }} />
            </Grid>
            <HStack>
              <input style={{ marginTop: '-24px' }} type='checkbox' required />
              <Text py='4'>
                Concordo em permitir que a Sim Company tenha acesso aos meus dados para me responder com propostas promocionais referente ao meu pedido.
              </Text>
            </HStack>

            <ButtonChakra type='submit'>Simular meu PABX</ButtonChakra>
          </Box>
        </Grid>

      </Box>

      <Box>
        <Text as='h2' fontSize={40} bgColor='#1d253a' color='white' py='30' textAlign='center'>SIM COMPANY E GOTO TEM O MELHOR SUPORTE EM TELEFONIA</Text>
      </Box>


      <Box id='bg-img-2' style={{ backgroundImage: `url('${bgGrenn.src}')` }}>
        <Grid py='100px' gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} columnGap='30px' maxW='1300px' m={{ base: '0 5%', md: '0 10%', xl: '0 auto' }}>
          <Box alignSelf='center'>
            <Image src={phone} alt='multi plataforma' />
          </Box>

          <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
            <Text as='h2' fontSize='40px' color='white'>Veja porque temos a melhor proposta de telefonia em nuvem</Text>
            <Text>Seus colaboradores podem se comunicar via <Text color='white' as='span'>web, ligação de voz Pabx Virtual,
              chat, compartilhar tela, videoconferência, conversar e colaborar
              com tranquilidade usando um único aplicativo,</Text> aumentando a produtividade e
              alta performance em comunicação.</Text>

            <Text mt='18'>
              Uma solução fácil de gerenciar por uma mensalidade fixa e garantindo seu
              orçamento anual, sem investir em equipamentos e hardware, você paga apenas
              como serviço. Tudo desenvolvido pela LogMeIn - GoTo, a marca de soluções de
              colaboração mais confiável do mundo
            </Text>

            <ButtonChakra w='80%'>
              Simular para empresa
            </ButtonChakra>
          </Box>
        </Grid>
      </Box>

      <Flex flexDirection='column' justifyContent='center' alignItems='center' bgColor='#1d253a' px='10%'>
        <Text as='h2' fontSize='55px' color='white' my='60px' textAlign='center'>Comparativo do <Text as='span' color='#ffda2a'>PABX em Nuvem GoTo</Text> X <Text color='#c4c4c4' as='span'>PABX Convencional</Text></Text>

        <Image src={TableIMG} alt='table' />

        <Text color='white' my='40px' maxW='900px' textAlign='center'>
          Economize investindo em uma única plataforma, Um PABX virtual completo, fácil de instalar e de usar, o sistema garante ao seu negócio uma comunicação
          unificada e descomplicada, sem requerer novos investimentos em infraestrutura e se adequando a quaisquer dispositivos e ambientes de trabalho.
        </Text>

        <Link href='/?couter=#form'>
          <ButtonChakra mb='40px' maxW='500px'>Simular custo grátis</ButtonChakra>
        </Link>
      </Flex>

      <Box id='bg-img-3' style={{ backgroundImage: `url('${bgGrenn.src}')` }} py='50px'>
        <Grid py='100px' gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} maxW='1300px' m={{ base: '0 5%', md: '0 10%', xl: '0 auto' }}>
          <Box>
            <Image src={func} alt='call-center' />
          </Box>
          <Box alignSelf='center'>
            <Text as='h2' fontSize='55px' color='white'>MUITO ALEM DE UM SIMPLES CALLCENTER</Text>

            <Text color='white' fontSize='22px' fontWeight='500'>Grave todas as ligações de sua empresa:</Text>
            <Text>Mais segurança e qualidade de atendimento. Saiba o que foi falado ao seu cliente e
              monitore o desenvolvimento de sua equipe. A gravação da ligação é um dos recursos
              presentes em todos os planos e você ganha sem ter que pagar nada a mais por isso!</Text>

            <Text mt='10px' color='white' fontSize='22px' fontWeight='500'>Acesso remoto:</Text>
            <Text>Comece a cortar custos desnecessários em sua empresa, atualize a maneira que sua
              empresa se comunica, Gerenciamento de ramais com apenas 1 número, gravação em
              nuvem e suporte para videoconferência integrada aos melhores apps de chamada.</Text>

            <Text mt='10px' color='white' fontSize='22px' fontWeight='500'>Roteamento de chamadas:</Text>
            <Text>Personalize os fluxos de chamada em minutos com um Editor de plano de discagem
              de arrastar e soltar. Crie atendentes automatizados e crie agendamentos e regras
              para o horário de funcionamento.</Text>

          </Box>
        </Grid>
      </Box>

      <Flex px='5%' bgColor='#1d253a' justifyContent='center' alignItems='center' flexDirection='column' pb='55px'>
        <Text as='h2' fontSize='55px' color='white' textAlign='center' mt='80px'>MUITO ALEM DE UM SIMPLES CALLCENTER</Text>
        <AspectRatio w='100%' maxW={{ base: '320px', md: '560px' }} h={{ base: '200px', md: '400px' }} ratio={1}>
          <iframe
            title='sim company'
            src='https://www.youtube.com/embed/AeYqEx5NmCE'
            allowFullScreen
          />
        </AspectRatio>
        <Text as='h2' fontSize={{ base: '35px', sm: '45px' }} color='white' textAlign='center' mt='30px'>Realize uma simulação e garanta seu aparelho IP grátis</Text>
        <Link href='/?couter=#form' style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <ButtonChakra maxW='500px' w='100%'>Garantir o meu agora!</ButtonChakra>
        </Link>
      </Flex>

      <Box id='bg-img-3' pb='80px' style={{ backgroundImage: `url('${bgGrenn.src}')` }} >
        <Text as='h2' textAlign='center' py='40px' fontSize='40px' color='white'>E QUEM JÁ ADQUIRIU ? O QUE DIZEM?</Text>

        <Splide options={{
          autoplay: true,
          type: 'loop'
        }}>
          <SplideSlide style={{ display: 'flex', alignContent: 'center' }}>
            <Flex bgColor='white' mx='15%' px={{ base: '25px', sm: '50px' }} py={{ base: '0px', sm: '50px' }} borderRadius={10} justifyContent='center' flexDirection='column'>
              <Text fontSize={{ base: '14px', md: '16px' }}>
                Para nós da Quick Comex a parceria de temos com Goto tem
                sido uma maravilha, visto que são muito prestativos em ágeis quanto
                aos retornos e suportes.
              </Text>
              <Text mt='4' fontSize={{ base: '14px', md: '16px' }}>
                Nós optamos por vocês desde o início da
                nossa empresa, por indicação de uma empresa parceira nossa e não
                temos até o presente momento, nada que desabone essa parceria.
              </Text>
              <Text fontWeight='600' fontSize='20px' mt='8'>Quick Comex</Text>
            </Flex>
          </SplideSlide>


          <SplideSlide style={{ display: 'flex', alignContent: 'center' }}>
            <Flex bgColor='white' mx='15%' px={{ base: '25px', sm: '50px' }} py={{ base: '0px', sm: '50px' }} borderRadius={10} justifyContent='center' flexDirection='column'>
              <Text fontSize={{ base: '14px', md: '16px' }}>
                Contratamos mais de 60 linhas voip para modernizar nosso sistema
                que era analógico.
              </Text>
              <Text mt='4' fontSize={{ base: '14px', md: '16px' }}>
                Foi algo incrível, em pouco tempo estava tudo implementado e
                funcionando. Tem uma curva de aprendizado bem baixa.
                Plataforma gerenciável.
              </Text>
              <Text mt='4' fontSize={{ base: '14px', md: '16px' }}>
                Economizamos e melhoramos nossa qualidade de atendimento junto
                aos clientes. O suporte é igualmente incrível, sempre sendo muito
                educados e solícitos. Gosto também dos projetos de implantação,
                sendo uma etapa importante de serem concluídos.
              </Text>
              <Text mt='4' fontSize={{ base: '14px', md: '16px' }}>
                Hoje dou nota máxima de satisfação em toda a plataforma, do
                atendimento até a entrega.
              </Text>
              <Text fontWeight='600' fontSize='20px' mt='8'>Sogamax - Distribuidora</Text>
            </Flex>
          </SplideSlide>

          <SplideSlide style={{ display: 'flex', alignContent: 'center' }}>
            <Flex bgColor='white' mx='15%' px={{ base: '25px', sm: '50px' }} py={{ base: '0px', sm: '50px' }} borderRadius={10} justifyContent='center' flexDirection='column'>
              <Text fontSize={{ base: '14px', md: '16px' }}>
                Os produtos da GoTo tem surpreendido no quesito, facilidade e economia.
                Até o momento tem sido uma experiência maravilhosa, tudo muito prático
                e de fácil manuseio.
              </Text>
              <Text mt='4' fontSize={{ base: '14px', md: '16px' }}>
                O suporte tem sido sensacional, em especial a uma atendente chama
                Sabrina, nota 10. Agradeço todo o suporte que tem sido prestado desde a
                contratação até a instalação.
              </Text>
              <Text fontWeight='600' fontSize='20px' mt='8'>Mitsu - Imóveis</Text>
            </Flex>
          </SplideSlide>
        </Splide>
      </Box>


      <Box bgColor='#1d253a'>
        <Grid py='100px' gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} maxW='1300px' m={{ base: '0 5%', md: '0 10%', xl: '0 auto' }}>
          <Box >
            <Image src={call} alt='faça sua consulta agora' />
          </Box>

          <Box alignContent='center' alignSelf='center'>
            <Text as='h1' fontSize={{ base: '35px', sm: '55px' }} textAlign='center'>
              <Text color='#9BCA00'>NÃO PERCA ESSA OPORTUNIDADE E FAÇA SUA</Text>
              <Text as='span' color='white'> AVALIAÇÃO GRATUITA!</Text>
            </Text>

            <Text my='8' color='white'>Aproveite e ganhe <Text as='span' color='white'>aparelho IP grátis</Text> em pedidos a cima de 3 ramais, faça sua simulação agora!</Text>
            <Grid
              my={{ base: '20px', sm: '20px' }}
              gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }}
              rowGap='10px'
              gridTemplateRows='1fr 1fr'
              columnGap='20px'>
              <ChakraInput placeholder='Nome' type='text' onChange={(e) => { setName(e.target.value) }} />
              <ChakraInput placeholder='Numero' type='text' onChange={(e) => { setNumber(Number(e.target.value)) }} />
              <ChakraInput placeholder='Quantidade de ramais' type='number' onChange={(e) => { setBranches(Number(e.target.value)) }} />
              <ChakraInput placeholder='email' type='email' onChange={(e) => { setEmail(e.target.value) }} />
            </Grid>
            <HStack>
              <input style={{ marginTop: '-20px' }} type='checkbox' required />
              <Text py='4' color='white'>
                Concordo em permitir que a Sim Company tenha acesso aos meus dados para me responder com propostas promocionais referente ao meu pedido.
              </Text>
            </HStack>

            <ButtonChakra>Simular meu PABX</ButtonChakra>
          </Box>
        </Grid>
      </Box>

      <ZapComponent />


      <Drawer placement='bottom' isOpen={open} onClose={close}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody display='flex' justifyContent='space-between' alignItems='center' px='5%' py='10px'>
            <p>Ao permancer nessa página você estará concordando com nossa política de privacidade e termos de uso</p> <Button py='14px' px='40px' borderRadius='10' colorScheme='green' onClick={onClose}>Concordo</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}