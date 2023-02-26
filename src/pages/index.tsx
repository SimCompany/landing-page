import { Box, Grid, Text, Input, Checkbox, Button, Table, Tr, Th, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import ButtonChakra from '../components/button'
import ChakraInput from '../components/input'
import TableLine from '../components/tableLine'

import phone from './../img/multiplata.png'
import TableIMG from './../img/tabela.png'
import func from './../img/funcao-02.png'
import bgGrenn from './../img/cap-bg-02.jpg'

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

export default function Index() {

  return (
    <Box as='main'>

      <Box id='bg-img-1'>

        <Grid py='100px' gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} maxW='1300px' m={{ base: '0 5%', md: '0 10%', xl: '0 auto' }}>
          <Box>
            <Text as='h1' fontSize='45px'>
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
              my={{ base: '20px', sm: '40px' }}
            >
              <ChakraInput placeholder='Nome' type='text' />
              <ChakraInput placeholder='Numero' type='text' />
              <ChakraInput placeholder='Quantidade de ramais' type='number' />
              <ChakraInput placeholder='email' type='email' />
            </Grid>
            <Checkbox my='10' colorScheme='red' iconColor='white'>Concordo em permitir que a Sim Company tenha acesso aos meus dados para me
              responder com propostas promocionais referente ao meu pedido.</Checkbox>

            <ButtonChakra>Simular meu PABX</ButtonChakra>
          </Box>
        </Grid>

      </Box>

      <Box>
        <Text as='h2' fontSize={40} bgColor='#1d253a' color='white' py='30' textAlign='center'>SIM COMPANY E GOTO TENHA O MELHOR SUPORTE EM</Text>
      </Box>


      <Box id='bg-img-2'>
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

        <ButtonChakra mb='40px' maxW='500px'>Simular custo grátis</ButtonChakra>
      </Flex>

      <Box id='bg-img-3' py='50px'>
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

      <Flex bgColor='#1d253a' justifyContent='center' alignItems='center' flexDirection='column' pb='55px'>
        <Text as='h2' fontSize='55px' color='white' textAlign='center' mt='80px'>MUITO ALEM DE UM SIMPLES CALLCENTER</Text>
        <Box as='h1' mb={{ base: '40px', md: '0px' }} h='400px' width={{ base: '80%', md: '400px' }} bgColor='black' color='white' display='flex' justifyContent='center' alignItems='center'>
          VIDEO
        </Box>
        <Text as='h2' fontSize={{ base: '35px', sm: '45px' }} color='white' textAlign='center' mt='30px'>Realize uma simulação e garanta seu aparelho IP grátis</Text>
        <ButtonChakra maxW='500px'>Garantir o meu agora!</ButtonChakra>
      </Flex>

      <Box id='bg-img-3' pb='80px' style={{ backgroundImage:`url('${bgGrenn.src}')`}} >
        <Text as='h2' textAlign='center' py='40px' fontSize='40px' color='white'>E QUEM JÁ ADQUIRIU ? O QUE DIZEM?</Text>

        <Splide options={{
          autoplay: true,
          type: 'loop'
        }}>
          <SplideSlide style={{ display: 'flex', alignContent: 'center' }}>
            <Flex bgColor='white' mx='15%' px={{ base: '25px', sm: '50px' }} py={{base: '0px', sm:'50px'}} borderRadius={10} justifyContent='center' flexDirection='column'>
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
            <Flex bgColor='white' mx='15%' px={{ base: '25px', sm: '50px' }} py={{base: '0px', sm:'50px'}} borderRadius={10} justifyContent='center' flexDirection='column'>
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
            <Flex bgColor='white' mx='15%' px={{ base: '25px', sm: '50px' }} py={{base: '0px', sm:'50px'}} borderRadius={10} justifyContent='center' flexDirection='column'>
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
          <Box as='h1' mb={{ base: '40px', md: '0px' }} h='400px' width={{ base: '100%', md: '600px' }} bgColor='black' color='white' display='flex' justifyContent='center' alignItems='center'>
            IMAGEM
          </Box>

          <Box alignContent='center'>
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
              <ChakraInput placeholder='Nome' type='text' />
              <ChakraInput placeholder='Numero' type='text' />
              <ChakraInput placeholder='Quantidade de ramais' type='number' />
              <ChakraInput placeholder='email' type='email' />
            </Grid>
            <Checkbox my='10' colorScheme='red' iconColor='white' color='white'>Concordo em permitir que a Sim Company tenha acesso aos meus dados para me
              responder com propostas promocionais referente ao meu pedido.</Checkbox>

            <ButtonChakra>Simular meu PABX</ButtonChakra>
          </Box>
        </Grid>
      </Box>

    </Box>
  )
}