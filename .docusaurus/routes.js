import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/material/markdown-page',
    component: ComponentCreator('/material/markdown-page', '2be'),
    exact: true
  },
  {
    path: '/material/',
    component: ComponentCreator('/material/', '3b7'),
    routes: [
      {
        path: '/material/',
        component: ComponentCreator('/material/', '2b4'),
        routes: [
          {
            path: '/material/',
            component: ComponentCreator('/material/', 'ae8'),
            routes: [
              {
                path: '/material/Conceitos Base/',
                component: ComponentCreator('/material/Conceitos Base/', 'deb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Conceitos Base/parte0',
                component: ComponentCreator('/material/Conceitos Base/parte0', '66a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Conceitos Base/parte2',
                component: ComponentCreator('/material/Conceitos Base/parte2', 'b53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Conceitos Base/parte3',
                component: ComponentCreator('/material/Conceitos Base/parte3', '47b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Conceitos Base/parte4',
                component: ComponentCreator('/material/Conceitos Base/parte4', 'b26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/',
                component: ComponentCreator('/material/Criptografia/', 'df2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/AlgoritmosAssimetricos/',
                component: ComponentCreator('/material/Criptografia/AlgoritmosAssimetricos/', '8ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/AlgoritmosAssimetricos/ECC',
                component: ComponentCreator('/material/Criptografia/AlgoritmosAssimetricos/ECC', '302'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/AlgoritmosAssimetricos/RSA',
                component: ComponentCreator('/material/Criptografia/AlgoritmosAssimetricos/RSA', 'ab4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/AlgoritmosHash/',
                component: ComponentCreator('/material/Criptografia/AlgoritmosHash/', '6fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/AlgoritmosHash/Algoritmoscomuns',
                component: ComponentCreator('/material/Criptografia/AlgoritmosHash/Algoritmoscomuns', 'feb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/AlgoritmosHash/hmaceJWT',
                component: ComponentCreator('/material/Criptografia/AlgoritmosHash/hmaceJWT', 'b99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/AlgoritmosHash/SHA',
                component: ComponentCreator('/material/Criptografia/AlgoritmosHash/SHA', '9e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/AlgoritmosSimetricos/',
                component: ComponentCreator('/material/Criptografia/AlgoritmosSimetricos/', 'bd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/AlgoritmosSimetricos/AES',
                component: ComponentCreator('/material/Criptografia/AlgoritmosSimetricos/AES', '5ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/AlgoritmosSimetricos/cifras',
                component: ComponentCreator('/material/Criptografia/AlgoritmosSimetricos/cifras', 'e56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/conclusao',
                component: ComponentCreator('/material/Criptografia/conclusao', 'cac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/Fundamentos/',
                component: ComponentCreator('/material/Criptografia/Fundamentos/', '6e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/Fundamentos/Ataquescomuns',
                component: ComponentCreator('/material/Criptografia/Fundamentos/Ataquescomuns', 'b60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/Fundamentos/CripAssimetrica',
                component: ComponentCreator('/material/Criptografia/Fundamentos/CripAssimetrica', 'ebb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/Fundamentos/CripSimetrica',
                component: ComponentCreator('/material/Criptografia/Fundamentos/CripSimetrica', '6f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/Fundamentos/CriptAvancadas',
                component: ComponentCreator('/material/Criptografia/Fundamentos/CriptAvancadas', '4ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/Fundamentos/Hashs',
                component: ComponentCreator('/material/Criptografia/Fundamentos/Hashs', 'a96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/Hardware/',
                component: ComponentCreator('/material/Criptografia/Hardware/', '405'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/Hardware/ataquesLaretais',
                component: ComponentCreator('/material/Criptografia/Hardware/ataquesLaretais', '0ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/Hardware/HSM',
                component: ComponentCreator('/material/Criptografia/Hardware/HSM', '432'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Criptografia/Hardware/TPM',
                component: ComponentCreator('/material/Criptografia/Hardware/TPM', '83f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Redes/',
                component: ComponentCreator('/material/Redes/', 'cf5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Redes/Camada1/',
                component: ComponentCreator('/material/Redes/Camada1/', 'a48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Redes/Camada1/Introducao',
                component: ComponentCreator('/material/Redes/Camada1/Introducao', '68f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Redes/Camada1/topologia',
                component: ComponentCreator('/material/Redes/Camada1/topologia', '96a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Redes/Camada2/',
                component: ComponentCreator('/material/Redes/Camada2/', '198'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Redes/Camada2/introducao',
                component: ComponentCreator('/material/Redes/Camada2/introducao', '53a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Redes/Camada2/Wifi',
                component: ComponentCreator('/material/Redes/Camada2/Wifi', '8a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Redes/Fundamentos/',
                component: ComponentCreator('/material/Redes/Fundamentos/', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Redes/Fundamentos/introcucao',
                component: ComponentCreator('/material/Redes/Fundamentos/introcucao', '521'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Redes/Fundamentos/Modeloosi',
                component: ComponentCreator('/material/Redes/Fundamentos/Modeloosi', 'e78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Segurança Pessoal/',
                component: ComponentCreator('/material/Segurança Pessoal/', '5e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Segurança Pessoal/Antivirus',
                component: ComponentCreator('/material/Segurança Pessoal/Antivirus', 'e10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Segurança Pessoal/Extras',
                component: ComponentCreator('/material/Segurança Pessoal/Extras', '26a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Segurança Pessoal/Gerenciadores',
                component: ComponentCreator('/material/Segurança Pessoal/Gerenciadores', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Segurança Pessoal/Malwares',
                component: ComponentCreator('/material/Segurança Pessoal/Malwares', '4b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Segurança Pessoal/Phishing',
                component: ComponentCreator('/material/Segurança Pessoal/Phishing', 'a94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Segurança Pessoal/Senhas',
                component: ComponentCreator('/material/Segurança Pessoal/Senhas', 'ec5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Segurança Pessoal/VPNs',
                component: ComponentCreator('/material/Segurança Pessoal/VPNs', '12c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Sistemas-Operacionais/',
                component: ComponentCreator('/material/Sistemas-Operacionais/', '5a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Sistemas-Operacionais/linux',
                component: ComponentCreator('/material/Sistemas-Operacionais/linux', '02e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/Sistemas-Operacionais/windowns',
                component: ComponentCreator('/material/Sistemas-Operacionais/windowns', 'a7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/material/',
                component: ComponentCreator('/material/', '66b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
