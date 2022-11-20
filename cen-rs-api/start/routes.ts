import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

Route.get('/', async () => {
  let query = `INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Rio Grande do Sul', '43', '10 693 929 ', '9 100 291 ', '8 744 154 ', '   85.1 ', '   81.8 ', '268 781.9 ', '   39.79 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Aceguá', '4300034', '  4 394 ', '  1 059 ', '  1 059 ', '   24.1 ', '   24.1 ', '  1 549.4 ', '   2.84 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Água Santa', '4300059', '  3 722 ', '  1 447 ', '  1 356 ', '   38.9 ', '   36.4 ', '   291.8 ', '   12.76 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Agudo', '4300109', '  16 722 ', '  6 889 ', '  6 889 ', '   41.2 ', '   41.2 ', '   536.1 ', '   31.19 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ajuricaba', '4300208', '  7 255 ', '  4 108 ', '  3 872 ', '   56.6 ', '   53.4 ', '   323.2 ', '   22.44 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Alecrim', '4300307', '  7 045 ', '  2 165 ', '  2 165 ', '   30.7 ', '   30.7 ', '   314.7 ', '   22.38 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Alegrete', '4300406', '  77 653 ', '  69 594 ', '  69 009 ', '   89.6 ', '   88.9 ', '  7 804.0 ', '   9.95 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Alegria', '4300455', '  4 301 ', '  1 585 ', '  1 353 ', '   36.9 ', '   31.5 ', '   172.7 ', '   24.91 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Almirante Tamandaré do Sul', '4300471', '  2 067 ', '   839 ', '   642 ', '   40.6 ', '   31.1 ', '   265.4 ', '   7.79 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Alpestre', '4300505', '  8 027 ', '  2 211 ', '  2 002 ', '   27.5 ', '   24.9 ', '   328.8 ', '   24.42 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Alto Alegre', '4300554', '  1 848 ', '   743 ', '   662 ', '   40.2 ', '   35.8 ', '   114.4 ', '   16.15 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Alto Feliz', '4300570', '  2 917 ', '   816 ', '   816 ', '   28.0 ', '   28.0 ', '   79.2 ', '   36.84 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Alvorada', '4300604', '  195 673 ', '  195 673 ', '  175 490 ', '   100.0 ', '   89.7 ', '   71.3 ', '  2 743.94 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Amaral Ferrador', '4300638', '  6 353 ', '  1 866 ', '  1 388 ', '   29.4 ', '   21.8 ', '   506.5 ', '   12.54 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ametista do Sul', '4300646', '  7 323 ', '  3 811 ', '  3 624 ', '   52.0 ', '   49.5 ', '   93.5 ', '   78.33 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('André da Rocha', '4300661', '  1 216 ', '   496 ', '   496 ', '   40.8 ', '   40.8 ', '   324.3 ', '   3.75 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Anta Gorda', '4300703', '  6 073 ', '  2 331 ', '  2 242 ', '   38.4 ', '   36.9 ', '   243.0 ', '   25.00 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Antônio Prado', '4300802', '  12 833 ', '  9 235 ', '  9 221 ', '   72.0 ', '   71.9 ', '   347.6 ', '   36.92 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Arambaré', '4300851', '  3 693 ', '  2 913 ', '  2 176 ', '   78.9 ', '   58.9 ', '   519.1 ', '   7.11 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Araricá', '4300877', '  4 864 ', '  3 996 ', '  3 996 ', '   82.2 ', '   82.2 ', '   35.3 ', '   137.83 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Aratiba', '4300901', '  6 565 ', '  3 316 ', '  2 936 ', '   50.5 ', '   44.7 ', '   341.3 ', '   19.23 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Arroio do Meio', '4301008', '  18 783 ', '  14 663 ', '  13 957 ', '   78.1 ', '   74.3 ', '   158.0 ', '   118.91 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Arroio do Padre', '4301073', '  2 730 ', '   454 ', '   213 ', '   16.6 ', '   7.8 ', '   124.3 ', '   21.96 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Arroio do Sal', '4301057', '  7 740 ', '  7 509 ', '  7 509 ', '   97.0 ', '   97.0 ', '   120.9 ', '   64.01 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Arroio do Tigre', '4301206', '  12 648 ', '  5 962 ', '  5 551 ', '   47.1 ', '   43.9 ', '   318.2 ', '   39.74 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Arroio dos Ratos', '4301107', '  13 606 ', '  12 956 ', '  12 956 ', '   95.2 ', '   95.2 ', '   425.9 ', '   31.94 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Arroio Grande', '4301305', '  18 470 ', '  16 085 ', '  15 605 ', '   87.1 ', '   84.5 ', '  2 513.6 ', '   7.35 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Arvorezinha', '4301404', '  10 225 ', '  6 273 ', '  6 180 ', '   61.3 ', '   60.4 ', '   271.6 ', '   37.64 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Augusto Pestana', '4301503', '  7 096 ', '  3 657 ', '  3 508 ', '   51.5 ', '   49.4 ', '   347.4 ', '   20.42 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Áurea', '4301552', '  3 665 ', '  1 537 ', '  1 537 ', '   41.9 ', '   41.9 ', '   158.3 ', '   23.15 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Bagé', '4301602', '  116 794 ', '  97 765 ', '  97 762 ', '   83.7 ', '   83.7 ', '  4 095.6 ', '   28.52 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Balneário Pinhal', '4301636', '  10 856 ', '  10 743 ', '  5 421 ', '   99.0 ', '   49.9 ', '   103.8 ', '   104.63 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Barão', '4301651', '  5 741 ', '  2 970 ', '  2 518 ', '   51.7 ', '   43.9 ', '   124.5 ', '   46.12 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Barão de Cotegipe', '4301701', '  6 529 ', '  3 966 ', '  3 890 ', '   60.7 ', '   59.6 ', '   260.1 ', '   25.10 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Barão do Triunfo', '4301750', '  7 018 ', '   697 ', '   697 ', '   9.9 ', '   9.9 ', '   436.4 ', '   16.08 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Barra do Guarita', '4301859', '  3 089 ', '  1 371 ', '  1 371 ', '   44.4 ', '   44.4 ', '   64.6 ', '   47.82 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Barra do Quaraí', '4301875', '  4 012 ', '  2 840 ', '  2 836 ', '   70.8 ', '   70.7 ', '  1 056.1 ', '   3.80 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Barra do Ribeiro', '4301909', '  12 572 ', '  9 291 ', '  9 095 ', '   73.9 ', '   72.3 ', '   729.0 ', '   17.25 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Barra do Rio Azul', '4301925', '  2 003 ', '   403 ', '   403 ', '   20.1 ', '   20.1 ', '   147.0 ', '   13.62 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Barra Funda', '4301958', '  2 367 ', '  1 522 ', '  1 445 ', '   64.3 ', '   61.0 ', '   60.0 ', '   39.43 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Barracão', '4301800', '  5 357 ', '  3 037 ', '  2 865 ', '   56.7 ', '   53.5 ', '   516.3 ', '   10.38 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Barros Cassal', '4302006', '  11 133 ', '  3 531 ', '  3 531 ', '   31.7 ', '   31.7 ', '   648.9 ', '   17.16 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Benjamin Constant do Sul', '4302055', '  2 307 ', '   341 ', '   262 ', '   14.8 ', '   11.4 ', '   132.4 ', '   17.42 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Bento Gonçalves', '4302105', '  107 278 ', '  99 069 ', '  96 591 ', '   92.3 ', '   90.0 ', '   382.0 ', '   280.86 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Boa Vista das Missões', '4302154', '  2 114 ', '   886 ', '   806 ', '   41.9 ', '   38.1 ', '   194.8 ', '   10.85 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Boa Vista do Buricá', '4302204', '  6 574 ', '  4 366 ', '  4 006 ', '   66.4 ', '   60.9 ', '   108.7 ', '   60.46 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Boa Vista do Cadeado', '4302220', '  2 441 ', '   472 ', '   433 ', '   19.3 ', '   17.7 ', '   701.1 ', '   3.48 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Boa Vista do Incra', '4302238', '  2 425 ', '   724 ', '   724 ', '   29.9 ', '   29.9 ', '   503.5 ', '   4.82 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Boa Vista do Sul', '4302253', '  2 776 ', '   391 ', '   391 ', '   14.1 ', '   14.1 ', '   94.3 ', '   29.42 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Bom Jesus', '4302303', '  11 519 ', '  8 593 ', '  8 326 ', '   74.6 ', '   72.3 ', '  2 625.7 ', '   4.39 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Bom Princípio', '4302352', '  11 789 ', '  9 198 ', '  9 198 ', '   78.0 ', '   78.0 ', '   88.5 ', '   133.20 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Bom Progresso', '4302378', '  2 328 ', '  1 146 ', '  1 146 ', '   49.2 ', '   49.2 ', '   88.7 ', '   26.23 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Bom Retiro do Sul', '4302402', '  11 472 ', '  9 162 ', '  9 130 ', '   79.9 ', '   79.6 ', '   102.3 ', '   112.11 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Boqueirão do Leão', '4302451', '  7 673 ', '  1 672 ', '  1 672 ', '   21.8 ', '   21.8 ', '   265.4 ', '   28.91 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Bossoroca', '4302501', '  6 884 ', '  3 682 ', '  3 497 ', '   53.5 ', '   50.8 ', '  1 610.6 ', '   4.27 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Bozano', '4302584', '  2 200 ', '   629 ', '   502 ', '   28.6 ', '   22.8 ', '   201.0 ', '   10.94 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Braga', '4302600', '  3 702 ', '  2 282 ', '  1 887 ', '   61.6 ', '   51.0 ', '   129.0 ', '   28.70 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Brochier', '4302659', '  4 675 ', '  2 296 ', '  2 100 ', '   49.1 ', '   44.9 ', '   106.7 ', '   43.80 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Butiá', '4302709', '  20 406 ', '  19 330 ', '  19 330 ', '   94.7 ', '   94.7 ', '   752.3 ', '   27.13 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Caçapava do Sul', '4302808', '  33 690 ', '  25 410 ', '  24 982 ', '   75.4 ', '   74.2 ', '  3 047.1 ', '   11.06 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cacequi', '4302907', '  13 676 ', '  11 952 ', '  10 632 ', '   87.4 ', '   77.7 ', '  2 370.0 ', '   5.77 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cachoeira do Sul', '4303004', '  83 827 ', '  71 700 ', '  70 695 ', '   85.5 ', '   84.3 ', '  3 735.2 ', '   22.44 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cachoeirinha', '4303103', '  118 278 ', '  118 278 ', '  118 278 ', '   100.0 ', '   100.0 ', '   44.0 ', '  2 687.04 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cacique Doble', '4303202', '  4 868 ', '  1 628 ', '  1 581 ', '   33.4 ', '   32.5 ', '   203.9 ', '   23.87 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Caibaté', '4303301', '  4 954 ', '  2 745 ', '  2 745 ', '   55.4 ', '   55.4 ', '   259.7 ', '   19.08 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Caiçara', '4303400', '  5 071 ', '  1 594 ', '  1 383 ', '   31.4 ', '   27.3 ', '   189.2 ', '   26.80 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Camaquã', '4303509', '  62 764 ', '  49 356 ', '  48 393 ', '   78.6 ', '   77.1 ', '  1 679.4 ', '   37.37 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Camargo', '4303558', '  2 592 ', '  1 095 ', '  1 095 ', '   42.2 ', '   42.2 ', '   138.1 ', '   18.77 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cambará do Sul', '4303608', '  6 542 ', '  3 041 ', '  1 633 ', '   46.5 ', '   25.0 ', '  1 212.5 ', '   5.40 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Campestre da Serra', '4303673', '  3 247 ', '  1 231 ', '   757 ', '   37.9 ', '   23.3 ', '   538.0 ', '   6.04 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Campina das Missões', '4303707', '  6 117 ', '  2 188 ', '  2 188 ', '   35.8 ', '   35.8 ', '   225.8 ', '   27.09 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Campinas do Sul', '4303806', '  5 506 ', '  4 217 ', '  4 217 ', '   76.6 ', '   76.6 ', '   276.2 ', '   19.94 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Campo Bom', '4303905', '  60 074 ', '  57 338 ', '  57 338 ', '   95.4 ', '   95.4 ', '   60.5 ', '   992.79 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Campo Novo', '4304002', '  5 459 ', '  4 109 ', '  3 872 ', '   75.3 ', '   70.9 ', '   222.1 ', '   24.58 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Campos Borges', '4304101', '  3 494 ', '  2 006 ', '  1 960 ', '   57.4 ', '   56.1 ', '   226.6 ', '   15.42 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Candelária', '4304200', '  30 171 ', '  15 715 ', '  14 737 ', '   52.1 ', '   48.8 ', '   943.9 ', '   31.96 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cândido Godói', '4304309', '  6 535 ', '  1 846 ', '  1 846 ', '   28.2 ', '   28.2 ', '   246.3 ', '   26.54 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Candiota', '4304358', '  8 771 ', '  2 598 ', '   751 ', '   29.6 ', '   8.6 ', '   933.8 ', '   9.39 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Canela', '4304408', '  39 229 ', '  35 831 ', '  35 831 ', '   91.3 ', '   91.3 ', '   253.8 ', '   154.58 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Canguçu', '4304507', '  53 259 ', '  19 694 ', '  19 694 ', '   37.0 ', '   37.0 ', '  3 525.3 ', '   15.11 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Canoas', '4304606', '  323 827 ', '  323 827 ', '  323 827 ', '   100.0 ', '   100.0 ', '   131.1 ', '  2 470.13 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Canudos do Vale', '4304614', '  1 807 ', '   411 ', '   411 ', '   22.7 ', '   22.7 ', '   81.9 ', '   22.06 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Capão Bonito do Sul', '4304622', '  1 754 ', '   499 ', '   393 ', '   28.4 ', '   22.4 ', '   527.1 ', '   3.33 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Capão da Canoa', '4304630', '  42 040 ', '  41 787 ', '  36 599 ', '   99.4 ', '   87.1 ', '   97.1 ', '   432.96 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Capão do Cipó', '4304655', '  3 104 ', '   519 ', '   519 ', '   16.7 ', '   16.7 ', '  1 008.7 ', '   3.08 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Capão do Leão', '4304663', '  24 298 ', '  22 382 ', '  22 354 ', '   92.1 ', '   92.0 ', '   785.4 ', '   30.94 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Capela de Santana', '4304689', '  11 612 ', '  6 915 ', '  6 915 ', '   59.6 ', '   59.6 ', '   183.8 ', '   63.19 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Capitão', '4304697', '  2 636 ', '  1 147 ', '  1 147 ', '   43.5 ', '   43.5 ', '   74.0 ', '   35.64 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Capivari do Sul', '4304671', '  3 890 ', '  3 230 ', '  2 760 ', '   83.0 ', '   71.0 ', '   412.8 ', '   9.42 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Caraá', '4304713', '  7 312 ', '  1 058 ', '  1 058 ', '   14.5 ', '   14.5 ', '   294.3 ', '   24.84 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Carazinho', '4304705', '  59 317 ', '  58 253 ', '  57 922 ', '   98.2 ', '   97.6 ', '   665.1 ', '   89.19 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Carlos Barbosa', '4304804', '  25 192 ', '  19 992 ', '  19 181 ', '   79.4 ', '   76.1 ', '   228.7 ', '   110.17 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Carlos Gomes', '4304853', '  1 607 ', '   378 ', '   378 ', '   23.5 ', '   23.5 ', '   83.2 ', '   19.33 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Casca', '4304903', '  8 651 ', '  5 090 ', '  5 005 ', '   58.8 ', '   57.9 ', '   271.7 ', '   31.83 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Caseiros', '4304952', '  3 007 ', '  1 488 ', '  1 488 ', '   49.5 ', '   49.5 ', '   235.7 ', '   12.76 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Catuípe', '4305009', '  9 323 ', '  5 998 ', '  5 680 ', '   64.3 ', '   60.9 ', '   583.3 ', '   15.98 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Caxias do Sul', '4305108', '  435 564 ', '  419 406 ', '  415 436 ', '   96.3 ', '   95.4 ', '  1 644.3 ', '   264.89 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Centenário', '4305116', '  2 965 ', '   949 ', '   863 ', '   32.0 ', '   29.1 ', '   134.3 ', '   22.07 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cerrito', '4305124', '  6 402 ', '  3 747 ', '  3 495 ', '   58.5 ', '   54.6 ', '   451.7 ', '   14.17 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cerro Branco', '4305132', '  4 454 ', '  1 274 ', '  1 274 ', '   28.6 ', '   28.6 ', '   158.8 ', '   28.05 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cerro Grande', '4305157', '  2 417 ', '   830 ', '   830 ', '   34.3 ', '   34.3 ', '   73.4 ', '   32.91 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cerro Grande do Sul', '4305173', '  10 268 ', '  2 484 ', '  2 167 ', '   24.2 ', '   21.1 ', '   324.8 ', '   31.61 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cerro Largo', '4305207', '  13 289 ', '  10 571 ', '  10 306 ', '   79.5 ', '   77.6 ', '   177.7 ', '   74.79 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Chapada', '4305306', '  9 377 ', '  5 573 ', '  4 859 ', '   59.4 ', '   51.8 ', '   684.0 ', '   13.71 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Charqueadas', '4305355', '  35 320 ', '  34 490 ', '  34 490 ', '   97.7 ', '   97.7 ', '   216.5 ', '   163.13 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Charrua', '4305371', '  3 471 ', '   584 ', '   584 ', '   16.8 ', '   16.8 ', '   198.1 ', '   17.52 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Chiapetta', '4305405', '  4 044 ', '  2 470 ', '  2 470 ', '   61.1 ', '   61.1 ', '   396.6 ', '   10.20 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Chuí', '4305439', '  5 917 ', '  5 697 ', '  5 697 ', '   96.3 ', '   96.3 ', '   202.6 ', '   29.21 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Chuvisca', '4305447', '  4 944 ', '   273 ', '   273 ', '   5.5 ', '   5.5 ', '   220.5 ', '   22.42 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cidreira', '4305454', '  12 668 ', '  12 260 ', '  10 786 ', '   96.8 ', '   85.1 ', '   245.9 ', '   51.52 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ciríaco', '4305504', '  4 922 ', '  2 494 ', '  2 334 ', '   50.7 ', '   47.4 ', '   273.9 ', '   17.97 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Colinas', '4305587', '  2 420 ', '  1 105 ', '  1 105 ', '   45.7 ', '   45.7 ', '   58.4 ', '   41.46 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Colorado', '4305603', '  3 550 ', '  1 844 ', '  1 704 ', '   51.9 ', '   48.0 ', '   285.3 ', '   12.44 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Condor', '4305702', '  6 552 ', '  4 034 ', '  4 034 ', '   61.6 ', '   61.6 ', '   465.2 ', '   14.08 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Constantina', '4305801', '  9 752 ', '  6 510 ', '  6 322 ', '   66.8 ', '   64.8 ', '   203.0 ', '   48.04 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Coqueiro Baixo', '4305835', '  1 528 ', '   282 ', '   234 ', '   18.5 ', '   15.3 ', '   112.3 ', '   13.61 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Coqueiros do Sul', '4305850', '  2 457 ', '   904 ', '   495 ', '   36.8 ', '   20.1 ', '   275.6 ', '   8.92 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Coronel Barros', '4305871', '  2 459 ', '  1 093 ', '  1 093 ', '   44.4 ', '   44.4 ', '   162.9 ', '   15.09 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Coronel Bicaco', '4305900', '  7 748 ', '  5 068 ', '  4 683 ', '   65.4 ', '   60.4 ', '   492.1 ', '   15.74 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Coronel Pilar', '4305934', '  1 725 ', '   174 ', '   174 ', '   10.1 ', '   10.1 ', '   105.4 ', '   16.36 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cotiporã', '4305959', '  3 917 ', '  2 048 ', '  1 932 ', '   52.3 ', '   49.3 ', '   172.4 ', '   22.72 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Coxilha', '4305975', '  2 826 ', '  1 739 ', '  1 739 ', '   61.5 ', '   61.5 ', '   422.8 ', '   6.68 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Crissiumal', '4306007', '  14 084 ', '  6 124 ', '  5 470 ', '   43.5 ', '   38.8 ', '   362.2 ', '   38.89 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cristal', '4306056', '  7 280 ', '  4 077 ', '  3 853 ', '   56.0 ', '   52.9 ', '   681.6 ', '   10.68 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cristal do Sul', '4306072', '  2 826 ', '   931 ', '   931 ', '   32.9 ', '   32.9 ', '   97.7 ', '   28.92 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cruz Alta', '4306106', '  62 821 ', '  60 594 ', '  60 588 ', '   96.5 ', '   96.4 ', '  1 360.4 ', '   46.18 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cruzaltense', '4306130', '  2 141 ', '   489 ', '   489 ', '   22.8 ', '   22.8 ', '   166.9 ', '   12.83 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Cruzeiro do Sul', '4306205', '  12 320 ', '  7 476 ', '  7 476 ', '   60.7 ', '   60.7 ', '   155.6 ', '   79.20 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('David Canabarro', '4306304', '  4 683 ', '  1 912 ', '  1 912 ', '   40.8 ', '   40.8 ', '   174.9 ', '   26.77 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Derrubadas', '4306320', '  3 190 ', '   901 ', '   901 ', '   28.2 ', '   28.2 ', '   361.3 ', '   8.83 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Dezesseis de Novembro', '4306353', '  2 866 ', '   667 ', '   667 ', '   23.3 ', '   23.3 ', '   216.8 ', '   13.22 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Dilermando de Aguiar', '4306379', '  3 064 ', '   991 ', '   991 ', '   32.3 ', '   32.3 ', '   600.5 ', '   5.10 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Dois Irmãos', '4306403', '  27 572 ', '  27 276 ', '  27 276 ', '   98.9 ', '   98.9 ', '   65.2 ', '   423.17 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Dois Irmãos das Missões', '4306429', '  2 157 ', '  1 094 ', '  1 094 ', '   50.7 ', '   50.7 ', '   225.7 ', '   9.56 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Dois Lajeados', '4306452', '  3 278 ', '  1 564 ', '  1 564 ', '   47.7 ', '   47.7 ', '   133.4 ', '   24.58 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Dom Feliciano', '4306502', '  14 380 ', '  3 334 ', '  3 334 ', '   23.2 ', '   23.2 ', '  1 356.2 ', '   10.60 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Dom Pedrito', '4306601', '  38 898 ', '  35 255 ', '  34 974 ', '   90.6 ', '   89.9 ', '  5 192.1 ', '   7.49 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Dom Pedro de Alcântara', '4306551', '  2 550 ', '   741 ', '   455 ', '   29.1 ', '   17.8 ', '   78.2 ', '   32.63 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Dona Francisca', '4306700', '  3 401 ', '  2 146 ', '  2 146 ', '   63.1 ', '   63.1 ', '   114.3 ', '   29.74 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Doutor Maurício Cardoso', '4306734', '  5 313 ', '  2 619 ', '  2 280 ', '   49.3 ', '   42.9 ', '   252.7 ', '   21.03 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Doutor Ricardo', '4306759', '  2 030 ', '   693 ', '   693 ', '   34.1 ', '   34.1 ', '   108.4 ', '   18.72 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Eldorado do Sul', '4306767', '  34 343 ', '  30 800 ', '  26 287 ', '   89.7 ', '   76.5 ', '   509.7 ', '   67.38 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Encantado', '4306809', '  20 510 ', '  17 879 ', '  17 783 ', '   87.2 ', '   86.7 ', '   139.2 ', '   147.38 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Encruzilhada do Sul', '4306908', '  24 534 ', '  17 119 ', '  17 024 ', '   69.8 ', '   69.4 ', '  3 348.3 ', '   7.33 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Engenho Velho', '4306924', '  1 527 ', '   599 ', '   599 ', '   39.2 ', '   39.2 ', '   71.2 ', '   21.45 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Entre Rios do Sul', '4306957', '  3 080 ', '  2 130 ', '  2 130 ', '   69.2 ', '   69.2 ', '   120.1 ', '   25.65 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Entre-Ijuís', '4306932', '  8 938 ', '  4 893 ', '  4 893 ', '   54.7 ', '   54.7 ', '   552.6 ', '   16.17 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Erebango', '4306973', '  2 970 ', '  1 958 ', '  1 958 ', '   65.9 ', '   65.9 ', '   153.1 ', '   19.40 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Erechim', '4307005', '  96 087 ', '  90 552 ', '  90 152 ', '   94.2 ', '   93.8 ', '   430.7 ', '   223.11 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ernestina', '4307054', '  3 088 ', '  1 671 ', '  1 671 ', '   54.1 ', '   54.1 ', '   239.1 ', '   12.91 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Erval Grande', '4307203', '  5 163 ', '  2 690 ', '  2 609 ', '   52.1 ', '   50.5 ', '   285.9 ', '   18.06 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Erval Seco', '4307302', '  7 878 ', '  3 437 ', '  2 741 ', '   43.6 ', '   34.8 ', '   363.9 ', '   21.65 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Esmeralda', '4307401', '  3 168 ', '  2 128 ', '  2 089 ', '   67.2 ', '   65.9 ', '   829.9 ', '   3.82 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Esperança do Sul', '4307450', '  3 272 ', '   844 ', '   717 ', '   25.8 ', '   21.9 ', '   148.4 ', '   22.05 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Espumoso', '4307500', '  15 240 ', '  11 131 ', '  10 884 ', '   73.0 ', '   71.4 ', '   783.1 ', '   19.46 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Estação', '4307559', '  6 011 ', '  5 119 ', '  5 061 ', '   85.2 ', '   84.2 ', '   100.3 ', '   59.95 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Estância Velha', '4307609', '  42 574 ', '  41 484 ', '  41 484 ', '   97.4 ', '   97.4 ', '   52.1 ', '   816.42 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Esteio', '4307708', '  80 755 ', '  80 643 ', '  80 643 ', '   99.9 ', '   99.9 ', '   27.7 ', '  2 917.87 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Estrela', '4307807', '  30 619 ', '  25 913 ', '  25 310 ', '   84.6 ', '   82.7 ', '   184.2 ', '   166.25 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Estrela Velha', '4307815', '  3 628 ', '  1 167 ', '   733 ', '   32.2 ', '   20.2 ', '   281.7 ', '   12.88 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Eugênio de Castro', '4307831', '  2 798 ', '  1 480 ', '  1 480 ', '   52.9 ', '   52.9 ', '   419.3 ', '   6.67 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Fagundes Varela', '4307864', '  2 579 ', '  1 293 ', '  1 293 ', '   50.1 ', '   50.1 ', '   134.3 ', '   19.20 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Farroupilha', '4307906', '  63 635 ', '  55 053 ', '  52 639 ', '   86.5 ', '   82.7 ', '   360.4 ', '   176.57 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Faxinal do Soturno', '4308003', '  6 672 ', '  4 175 ', '  3 984 ', '   62.6 ', '   59.7 ', '   169.9 ', '   39.27 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Faxinalzinho', '4308052', '  2 567 ', '  1 273 ', '  1 273 ', '   49.6 ', '   49.6 ', '   143.4 ', '   17.90 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Fazenda Vilanova', '4308078', '  3 697 ', '  2 013 ', '  2 013 ', '   54.4 ', '   54.4 ', '   84.8 ', '   43.60 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Feliz', '4308102', '  12 359 ', '  9 416 ', '  8 915 ', '   76.2 ', '   72.1 ', '   95.4 ', '   129.59 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Flores da Cunha', '4308201', '  27 126 ', '  20 855 ', '  18 817 ', '   76.9 ', '   69.4 ', '   273.5 ', '   99.20 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Floriano Peixoto', '4308250', '  2 018 ', '   292 ', '   292 ', '   14.5 ', '   14.5 ', '   168.4 ', '   11.98 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Fontoura Xavier', '4308300', '  10 719 ', '  4 100 ', '  3 921 ', '   38.2 ', '   36.6 ', '   583.5 ', '   18.37 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Formigueiro', '4308409', '  7 014 ', '  2 769 ', '  2 769 ', '   39.5 ', '   39.5 ', '   582.0 ', '   12.05 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Forquetinha', '4308433', '  2 479 ', '   468 ', '   468 ', '   18.9 ', '   18.9 ', '   93.6 ', '   26.49 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Fortaleza dos Valos', '4308458', '  4 575 ', '  2 993 ', '  2 670 ', '   65.4 ', '   58.4 ', '   650.3 ', '   7.03 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Frederico Westphalen', '4308508', '  28 843 ', '  23 333 ', '  22 962 ', '   80.9 ', '   79.6 ', '   265.0 ', '   108.85 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Garibaldi', '4308607', '  30 689 ', '  27 211 ', '  26 982 ', '   88.7 ', '   87.9 ', '   169.2 ', '   181.34 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Garruchos', '4308656', '  3 234 ', '  1 057 ', '  1 057 ', '   32.7 ', '   32.7 ', '   799.9 ', '   4.04 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Gaurama', '4308706', '  5 862 ', '  3 388 ', '  3 213 ', '   57.8 ', '   54.8 ', '   204.3 ', '   28.70 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('General Câmara', '4308805', '  8 447 ', '  4 966 ', '  4 345 ', '   58.8 ', '   51.4 ', '   510.0 ', '   16.56 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Gentil', '4308854', '  1 677 ', '   723 ', '   509 ', '   43.1 ', '   30.4 ', '   184.0 ', '   9.11 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Getúlio Vargas', '4308904', '  16 154 ', '  13 862 ', '  13 587 ', '   85.8 ', '   84.1 ', '   286.6 ', '   56.37 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Giruá', '4309001', '  17 075 ', '  12 907 ', '  12 560 ', '   75.6 ', '   73.6 ', '   855.9 ', '   19.95 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Glorinha', '4309050', '  6 891 ', '  2 067 ', '  2 065 ', '   30.0 ', '   30.0 ', '   323.6 ', '   21.29 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Gramado', '4309100', '  32 273 ', '  29 013 ', '  28 749 ', '   89.9 ', '   89.1 ', '   237.8 ', '   135.70 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Gramado dos Loureiros', '4309126', '  2 269 ', '   526 ', '   526 ', '   23.2 ', '   23.2 ', '   131.4 ', '   17.27 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Gramado Xavier', '4309159', '  3 970 ', '   529 ', '   529 ', '   13.3 ', '   13.3 ', '   217.5 ', '   18.25 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Gravataí', '4309209', '  255 660 ', '  243 497 ', '  229 301 ', '   95.2 ', '   89.7 ', '   463.5 ', '   551.58 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Guabiju', '4309258', '  1 598 ', '   738 ', '   738 ', '   46.2 ', '   46.2 ', '   148.4 ', '   10.77 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Guaíba', '4309308', '  95 204 ', '  93 064 ', '  89 202 ', '   97.8 ', '   93.7 ', '   376.9 ', '   252.57 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Guaporé', '4309407', '  22 814 ', '  20 820 ', '  20 614 ', '   91.3 ', '   90.4 ', '   297.7 ', '   76.64 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Guarani das Missões', '4309506', '  8 115 ', '  5 030 ', '  4 948 ', '   62.0 ', '   61.0 ', '   290.5 ', '   27.93 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Harmonia', '4309555', '  4 254 ', '  2 456 ', '  2 456 ', '   57.7 ', '   57.7 ', '   44.8 ', '   95.04 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Herval', '4307104', '  6 753 ', '  4 519 ', '  4 430 ', '   66.9 ', '   65.6 ', '  1 757.8 ', '   3.84 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Herveiras', '4309571', '  2 954 ', '   384 ', '   384 ', '   13.0 ', '   13.0 ', '   118.3 ', '   24.97 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Horizontina', '4309605', '  18 348 ', '  14 569 ', '  14 257 ', '   79.4 ', '   77.7 ', '   232.5 ', '   78.92 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Hulha Negra', '4309654', '  6 043 ', '  2 909 ', '  2 909 ', '   48.1 ', '   48.1 ', '   822.9 ', '   7.34 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Humaitá', '4309704', '  4 919 ', '  2 911 ', '  2 911 ', '   59.2 ', '   59.2 ', '   134.5 ', '   36.57 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ibarama', '4309753', '  4 371 ', '  1 053 ', '  1 053 ', '   24.1 ', '   24.1 ', '   193.1 ', '   22.63 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ibiaçá', '4309803', '  4 710 ', '  2 849 ', '  2 718 ', '   60.5 ', '   57.7 ', '   348.8 ', '   13.50 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ibiraiaras', '4309902', '  7 171 ', '  3 817 ', '  3 679 ', '   53.2 ', '   51.3 ', '   300.7 ', '   23.85 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ibirapuitã', '4309951', '  4 061 ', '  2 391 ', '  2 391 ', '   58.9 ', '   58.9 ', '   307.0 ', '   13.23 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ibirubá', '4310009', '  19 310 ', '  15 342 ', '  15 153 ', '   79.5 ', '   78.5 ', '   607.5 ', '   31.79 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Igrejinha', '4310108', '  31 660 ', '  30 190 ', '  30 190 ', '   95.4 ', '   95.4 ', '   135.9 ', '   233.03 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ijuí', '4310207', '  78 915 ', '  71 550 ', '  70 596 ', '   90.7 ', '   89.5 ', '   689.1 ', '   114.51 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ilópolis', '4310306', '  4 102 ', '  2 207 ', '  2 207 ', '   53.8 ', '   53.8 ', '   116.5 ', '   35.22 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Imbé', '4310330', '  17 670 ', '  17 661 ', '  17 661 ', '   99.9 ', '   99.9 ', '   39.4 ', '   448.53 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Imigrante', '4310363', '  3 023 ', '  1 499 ', '  1 202 ', '   49.6 ', '   39.8 ', '   73.4 ', '   41.21 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Independência', '4310405', '  6 618 ', '  4 157 ', '  3 576 ', '   62.8 ', '   54.0 ', '   357.4 ', '   18.51 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Inhacorá', '4310413', '  2 267 ', '  1 346 ', '  1 346 ', '   59.4 ', '   59.4 ', '   114.1 ', '   19.87 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ipê', '4310439', '  6 016 ', '  2 913 ', '  2 548 ', '   48.4 ', '   42.4 ', '   599.2 ', '   10.04 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ipiranga do Sul', '4310462', '  1 944 ', '   679 ', '   679 ', '   34.9 ', '   34.9 ', '   157.9 ', '   12.31 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Iraí', '4310504', '  8 078 ', '  4 457 ', '  4 457 ', '   55.2 ', '   55.2 ', '   182.2 ', '   44.34 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Itaara', '4310538', '  5 010 ', '  3 968 ', '  3 968 ', '   79.2 ', '   79.2 ', '   173.0 ', '   28.96 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Itacurubi', '4310553', '  3 441 ', '  1 184 ', '  1 184 ', '   34.4 ', '   34.4 ', '  1 120.9 ', '   3.07 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Itapuca', '4310579', '  2 344 ', '   558 ', '   558 ', '   23.8 ', '   23.8 ', '   184.3 ', '   12.72 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Itaqui', '4310603', '  38 159 ', '  33 311 ', '  33 301 ', '   87.3 ', '   87.3 ', '  3 404.1 ', '   11.21 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Itati', '4310652', '  2 584 ', '   212 ', '   212 ', '   8.2 ', '   8.2 ', '   206.9 ', '   12.49 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Itatiba do Sul', '4310702', '  4 171 ', '  1 729 ', '  1 235 ', '   41.5 ', '   29.6 ', '   212.2 ', '   19.66 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ivorá', '4310751', '  2 156 ', '   705 ', '   705 ', '   32.7 ', '   32.7 ', '   122.9 ', '   17.54 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ivoti', '4310801', '  19 874 ', '  18 062 ', '  18 062 ', '   90.9 ', '   90.9 ', '   63.2 ', '   314.71 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Jaboticaba', '4310850', '  4 098 ', '  1 487 ', '  1 216 ', '   36.3 ', '   29.7 ', '   128.1 ', '   32.00 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Jacuizinho', '4310876', '  2 507 ', '   562 ', '   562 ', '   22.4 ', '   22.4 ', '   338.5 ', '   7.41 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Jacutinga', '4310900', '  3 633 ', '  2 573 ', '  2 469 ', '   70.8 ', '   68.0 ', '   179.3 ', '   20.26 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Jaguarão', '4311007', '  27 931 ', '  26 105 ', '  26 105 ', '   93.5 ', '   93.5 ', '  2 054.4 ', '   13.60 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Jaguari', '4311106', '  11 473 ', '  6 531 ', '  6 460 ', '   56.9 ', '   56.3 ', '   673.4 ', '   17.04 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Jaquirana', '4311122', '  4 177 ', '  2 430 ', '  2 394 ', '   58.2 ', '   57.3 ', '   907.9 ', '   4.60 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Jari', '4311130', '  3 575 ', '   613 ', '   613 ', '   17.1 ', '   17.1 ', '   856.5 ', '   4.17 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Jóia', '4311155', '  8 331 ', '  2 089 ', '  2 089 ', '   25.1 ', '   25.1 ', '  1 235.9 ', '   6.74 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Júlio de Castilhos', '4311205', '  19 579 ', '  16 106 ', '  15 456 ', '   82.3 ', '   78.9 ', '  1 929.4 ', '   10.15 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Lagoa Bonita do Sul', '4311239', '  2 662 ', '   384 ', '   384 ', '   14.4 ', '   14.4 ', '   108.5 ', '   24.53 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Lagoa dos Três Cantos', '4311270', '  1 598 ', '   807 ', '   740 ', '   50.5 ', '   46.3 ', '   138.6 ', '   11.53 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Lagoa Vermelha', '4311304', '  27 525 ', '  24 136 ', '  23 690 ', '   87.7 ', '   86.1 ', '  1 263.5 ', '   21.78 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Lagoão', '4311254', '  6 185 ', '  1 655 ', '  1 655 ', '   26.8 ', '   26.8 ', '   383.6 ', '   16.12 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Lajeado', '4311403', '  71 445 ', '  71 180 ', '  71 180 ', '   99.6 ', '   99.6 ', '   90.1 ', '   793.06 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Lajeado do Bugre', '4311429', '  2 487 ', '   706 ', '   706 ', '   28.4 ', '   28.4 ', '   67.9 ', '   36.61 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Lavras do Sul', '4311502', '  7 679 ', '  4 758 ', '  4 460 ', '   62.0 ', '   58.1 ', '  2 600.6 ', '   2.95 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Liberato Salzano', '4311601', '  5 780 ', '  1 297 ', '  1 148 ', '   22.4 ', '   19.9 ', '   245.6 ', '   23.53 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Lindolfo Collor', '4311627', '  5 227 ', '  4 287 ', '  4 287 ', '   82.0 ', '   82.0 ', '   33.0 ', '   158.44 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Linha Nova', '4311643', '  1 624 ', '   416 ', '   416 ', '   25.6 ', '   25.6 ', '   63.7 ', '   25.48 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Maçambará', '4311718', '  4 738 ', '  1 310 ', '  1 068 ', '   27.6 ', '   22.5 ', '  1 682.8 ', '   2.82 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Machadinho', '4311700', '  5 510 ', '  3 385 ', '  3 291 ', '   61.4 ', '   59.7 ', '   334.4 ', '   16.48 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Mampituba', '4311734', '  3 003 ', '   568 ', '   382 ', '   18.9 ', '   12.7 ', '   158.0 ', '   19.00 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Manoel Viana', '4311759', '  7 072 ', '  5 362 ', '  5 142 ', '   75.8 ', '   72.7 ', '  1 390.7 ', '   5.09 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Maquiné', '4311775', '  6 905 ', '  2 064 ', '  1 384 ', '   29.9 ', '   20.0 ', '   621.7 ', '   11.11 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Maratá', '4311791', '  2 527 ', '   753 ', '   753 ', '   29.8 ', '   29.8 ', '   81.2 ', '   31.13 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Marau', '4311809', '  36 364 ', '  31 558 ', '  31 489 ', '   86.8 ', '   86.6 ', '   649.3 ', '   56.00 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Marcelino Ramos', '4311908', '  5 134 ', '  2 722 ', '  2 401 ', '   53.0 ', '   46.8 ', '   229.6 ', '   22.36 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Mariana Pimentel', '4311981', '  3 768 ', '   638 ', '   638 ', '   16.9 ', '   16.9 ', '   337.8 ', '   11.15 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Mariano Moro', '4312005', '  2 210 ', '  1 153 ', '  1 153 ', '   52.2 ', '   52.2 ', '   99.1 ', '   22.30 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Marques de Souza', '4312054', '  4 068 ', '  1 545 ', '  1 157 ', '   38.0 ', '   28.4 ', '   125.2 ', '   32.50 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Mata', '4312104', '  5 111 ', '  2 618 ', '  2 349 ', '   51.2 ', '   46.0 ', '   311.9 ', '   16.39 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Mato Castelhano', '4312138', '  2 470 ', '   521 ', '   521 ', '   21.1 ', '   21.1 ', '   238.4 ', '   10.36 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Mato Leitão', '4312153', '  3 865 ', '  1 621 ', '  1 345 ', '   41.9 ', '   34.8 ', '   45.9 ', '   84.20 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Mato Queimado', '4312179', '  1 799 ', '   479 ', '   479 ', '   26.6 ', '   26.6 ', '   114.6 ', '   15.69 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Maximiliano de Almeida', '4312203', '  4 911 ', '  2 974 ', '  2 974 ', '   60.6 ', '   60.6 ', '   208.5 ', '   23.55 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Minas do Leão', '4312252', '  7 631 ', '  7 340 ', '  7 340 ', '   96.2 ', '   96.2 ', '   424.3 ', '   17.98 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Miraguaí', '4312302', '  4 855 ', '  2 069 ', '  1 807 ', '   42.6 ', '   37.2 ', '   130.4 ', '   37.24 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Montauri', '4312351', '  1 542 ', '   644 ', '   644 ', '   41.8 ', '   41.8 ', '   82.1 ', '   18.79 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Monte Alegre dos Campos', '4312377', '  3 102 ', '   645 ', '   174 ', '   20.8 ', '   5.6 ', '   549.7 ', '   5.64 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Monte Belo do Sul', '4312385', '  2 670 ', '   770 ', '   770 ', '   28.8 ', '   28.8 ', '   68.4 ', '   39.05 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Montenegro', '4312401', '  59 415 ', '  53 629 ', '  52 907 ', '   90.3 ', '   89.0 ', '   424.0 ', '   140.13 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Mormaço', '4312427', '  2 749 ', '   600 ', '   600 ', '   21.8 ', '   21.8 ', '   146.1 ', '   18.81 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Morrinhos do Sul', '4312443', '  3 182 ', '  1 300 ', '   682 ', '   40.9 ', '   21.4 ', '   165.4 ', '   19.23 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Morro Redondo', '4312450', '  6 227 ', '  2 648 ', '  2 648 ', '   42.5 ', '   42.5 ', '   244.6 ', '   25.45 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Morro Reuter', '4312476', '  5 676 ', '  4 841 ', '  4 841 ', '   85.3 ', '   85.3 ', '   87.6 ', '   64.76 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Mostardas', '4312500', '  12 124 ', '  8 143 ', '  7 427 ', '   67.2 ', '   61.3 ', '  1 983.0 ', '   6.11 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Muçum', '4312609', '  4 791 ', '  4 044 ', '  4 044 ', '   84.4 ', '   84.4 ', '   110.9 ', '   43.20 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Muitos Capões', '4312617', '  2 988 ', '   970 ', '   799 ', '   32.5 ', '   26.7 ', '  1 197.9 ', '   2.49 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Muliterno', '4312625', '  1 813 ', '   508 ', '   508 ', '   28.0 ', '   28.0 ', '   111.1 ', '   16.31 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Não-Me-Toque', '4312658', '  15 936 ', '  13 966 ', '  13 782 ', '   87.6 ', '   86.5 ', '   361.7 ', '   44.06 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nicolau Vergueiro', '4312674', '  1 721 ', '   636 ', '   636 ', '   37.0 ', '   37.0 ', '   155.8 ', '   11.04 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nonoai', '4312708', '  12 074 ', '  9 065 ', '  9 065 ', '   75.1 ', '   75.1 ', '   469.3 ', '   25.73 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nova Alvorada', '4312757', '  3 182 ', '  1 332 ', '  1 146 ', '   41.9 ', '   36.0 ', '   149.4 ', '   21.30 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nova Araçá', '4312807', '  4 001 ', '  2 880 ', '  2 880 ', '   72.0 ', '   72.0 ', '   74.4 ', '   53.81 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nova Bassano', '4312906', '  8 840 ', '  5 514 ', '  5 514 ', '   62.4 ', '   62.4 ', '   211.6 ', '   41.77 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nova Boa Vista', '4312955', '  1 960 ', '   578 ', '   578 ', '   29.5 ', '   29.5 ', '   94.2 ', '   20.80 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nova Bréscia', '4313003', '  3 184 ', '  1 511 ', '  1 511 ', '   47.5 ', '   47.5 ', '   102.8 ', '   30.97 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nova Candelária', '4313011', '  2 751 ', '   709 ', '   709 ', '   25.8 ', '   25.8 ', '   97.8 ', '   28.12 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nova Esperança do Sul', '4313037', '  4 671 ', '  3 599 ', '  3 599 ', '   77.0 ', '   77.0 ', '   191.0 ', '   24.46 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nova Hartz', '4313060', '  18 346 ', '  15 269 ', '  15 269 ', '   83.2 ', '   83.2 ', '   62.6 ', '   293.26 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nova Pádua', '4313086', '  2 450 ', '   732 ', '   732 ', '   29.9 ', '   29.9 ', '   103.2 ', '   23.73 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nova Palma', '4313102', '  6 342 ', '  3 083 ', '  2 861 ', '   48.6 ', '   45.1 ', '   313.5 ', '   20.23 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nova Petrópolis', '4313201', '  19 045 ', '  14 134 ', '  12 332 ', '   74.2 ', '   64.8 ', '   291.3 ', '   65.38 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nova Prata', '4313300', '  22 830 ', '  18 659 ', '  18 532 ', '   81.7 ', '   81.2 ', '   258.7 ', '   88.23 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nova Ramada', '4313334', '  2 437 ', '   670 ', '   670 ', '   27.5 ', '   27.5 ', '   254.8 ', '   9.57 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nova Roma do Sul', '4313359', '  3 343 ', '  1 585 ', '  1 585 ', '   47.4 ', '   47.4 ', '   149.1 ', '   22.43 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Nova Santa Rita', '4313375', '  22 716 ', '  19 475 ', '  19 228 ', '   85.7 ', '   84.6 ', '   217.9 ', '   104.26 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Novo Barreiro', '4313490', '  3 978 ', '  1 306 ', '  1 306 ', '   32.8 ', '   32.8 ', '   123.6 ', '   32.19 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Novo Cabrais', '4313391', '  3 855 ', '   545 ', '   545 ', '   14.1 ', '   14.1 ', '   192.3 ', '   20.05 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Novo Hamburgo', '4313409', '  238 940 ', '  234 798 ', '  234 798 ', '   98.3 ', '   98.3 ', '   223.8 ', '  1 067.54 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Novo Machado', '4313425', '  3 925 ', '  1 553 ', '   739 ', '   39.6 ', '   18.8 ', '   218.7 ', '   17.95 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Novo Tiradentes', '4313441', '  2 277 ', '   654 ', '   654 ', '   28.7 ', '   28.7 ', '   75.4 ', '   30.20 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Novo Xingu', '4313466', '  1 757 ', '   554 ', '   554 ', '   31.5 ', '   31.5 ', '   80.6 ', '   21.80 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Osório', '4313508', '  40 906 ', '  37 917 ', '  34 645 ', '   92.7 ', '   84.7 ', '   663.6 ', '   61.65 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Paim Filho', '4313607', '  4 243 ', '  2 253 ', '  2 253 ', '   53.1 ', '   53.1 ', '   182.2 ', '   23.29 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Palmares do Sul', '4313656', '  10 969 ', '  9 803 ', '  3 945 ', '   89.4 ', '   36.0 ', '   949.2 ', '   11.56 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Palmeira das Missões', '4313706', '  34 328 ', '  29 831 ', '  29 159 ', '   86.9 ', '   84.9 ', '  1 419.4 ', '   24.18 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Palmitinho', '4313805', '  6 920 ', '  3 393 ', '  3 393 ', '   49.0 ', '   49.0 ', '   144.0 ', '   48.04 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Panambi', '4313904', '  38 058 ', '  34 562 ', '  34 562 ', '   90.8 ', '   90.8 ', '   490.9 ', '   77.53 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Pantano Grande', '4313953', '  9 895 ', '  8 314 ', '  6 983 ', '   84.0 ', '   70.6 ', '   841.2 ', '   11.76 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Paraí', '4314001', '  6 812 ', '  3 816 ', '  3 816 ', '   56.0 ', '   56.0 ', '   120.4 ', '   56.57 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Paraíso do Sul', '4314027', '  7 336 ', '  2 852 ', '  2 588 ', '   38.9 ', '   35.3 ', '   337.8 ', '   21.71 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Pareci Novo', '4314035', '  3 511 ', '   981 ', '   981 ', '   27.9 ', '   27.9 ', '   57.4 ', '   61.16 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Parobé', '4314050', '  51 502 ', '  48 633 ', '  47 466 ', '   94.4 ', '   92.2 ', '   108.6 ', '   474.03 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Passa Sete', '4314068', '  5 154 ', '   555 ', '   352 ', '   10.8 ', '   6.8 ', '   304.5 ', '   16.92 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Passo do Sobrado', '4314076', '  6 011 ', '  1 429 ', '  1 429 ', '   23.8 ', '   23.8 ', '   265.1 ', '   22.67 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Passo Fundo', '4314100', '  184 826 ', '  180 120 ', '  179 548 ', '   97.5 ', '   97.1 ', '   783.4 ', '   235.92 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Paulo Bento', '4314134', '  2 196 ', '   594 ', '   594 ', '   27.0 ', '   27.0 ', '   148.4 ', '   14.80 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Paverama', '4314159', '  8 044 ', '  4 098 ', '  2 720 ', '   50.9 ', '   33.8 ', '   171.9 ', '   46.80 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Pedras Altas', '4314175', '  2 212 ', '   768 ', '   716 ', '   34.7 ', '   32.4 ', '  1 377.4 ', '   1.61 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Pedro Osório', '4314209', '  7 811 ', '  7 301 ', '  7 212 ', '   93.5 ', '   92.3 ', '   608.8 ', '   12.83 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Pejuçara', '4314308', '  3 973 ', '  2 672 ', '  2 672 ', '   67.3 ', '   67.3 ', '   414.2 ', '   9.59 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Pelotas', '4314407', '  328 275 ', '  306 193 ', '  306 193 ', '   93.3 ', '   93.3 ', '  1 610.1 ', '   203.89 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Picada Café', '4314423', '  5 182 ', '  4 559 ', '  4 559 ', '   88.0 ', '   88.0 ', '   85.1 ', '   60.86 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Pinhal', '4314456', '  2 513 ', '  1 290 ', '  1 290 ', '   51.3 ', '   51.3 ', '   68.2 ', '   36.84 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Pinhal da Serra', '4314464', '  2 130 ', '   478 ', '   478 ', '   22.4 ', '   22.4 ', '   437.4 ', '   4.87 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Pinhal Grande', '4314472', '  4 471 ', '  1 895 ', '  1 876 ', '   42.4 ', '   42.0 ', '   477.1 ', '   9.37 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Pinheirinho do Vale', '4314498', '  4 497 ', '   915 ', '   915 ', '   20.3 ', '   20.3 ', '   105.3 ', '   42.69 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Pinheiro Machado', '4314506', '  12 780 ', '  9 784 ', '  9 211 ', '   76.6 ', '   72.1 ', '  2 249.6 ', '   5.68 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Pirapó', '4314555', '  2 757 ', '   777 ', '   751 ', '   28.2 ', '   27.2 ', '   291.7 ', '   9.45 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Piratini', '4314605', '  19 841 ', '  11 570 ', '  11 570 ', '   58.3 ', '   58.3 ', '  3 539.7 ', '   5.61 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Planalto', '4314704', '  10 524 ', '  5 932 ', '  5 581 ', '   56.4 ', '   53.0 ', '   230.4 ', '   45.67 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Poço das Antas', '4314753', '  2 017 ', '   861 ', '   701 ', '   42.7 ', '   34.8 ', '   65.1 ', '   31.00 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Pontão', '4314779', '  3 857 ', '  1 559 ', '  1 475 ', '   40.4 ', '   38.2 ', '   505.7 ', '   7.63 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ponte Preta', '4314787', '  1 750 ', '   512 ', '   431 ', '   29.3 ', '   24.6 ', '   99.9 ', '   17.52 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Portão', '4314803', '  30 920 ', '  25 276 ', '  25 276 ', '   81.7 ', '   81.7 ', '   159.9 ', '   193.38 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Porto Alegre', '4314902', ' 1 409 351 ', ' 1 409 351 ', ' 1 409 351 ', '   100.0 ', '   100.0 ', '   496.7 ', '  2 837.52 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Porto Lucena', '4315008', '  5 413 ', '  2 331 ', '  2 331 ', '   43.1 ', '   43.1 ', '   250.1 ', '   21.65 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Porto Mauá', '4315057', '  2 542 ', '   954 ', '   954 ', '   37.5 ', '   37.5 ', '   105.6 ', '   24.08 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Porto Vera Cruz', '4315073', '  1 852 ', '   440 ', '   440 ', '   23.8 ', '   23.8 ', '   113.6 ', '   16.30 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Porto Xavier', '4315107', '  10 558 ', '  5 210 ', '  5 071 ', '   49.3 ', '   48.0 ', '   280.5 ', '   37.64 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Pouso Novo', '4315131', '  1 875 ', '   632 ', '   632 ', '   33.7 ', '   33.7 ', '   106.5 ', '   17.60 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Presidente Lucena', '4315149', '  2 484 ', '  1 511 ', '  1 206 ', '   60.8 ', '   48.6 ', '   49.4 ', '   50.26 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Progresso', '4315156', '  6 163 ', '  1 873 ', '  1 623 ', '   30.4 ', '   26.3 ', '   255.9 ', '   24.09 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Protásio Alves', '4315172', '  2 000 ', '   427 ', '   427 ', '   21.4 ', '   21.4 ', '   172.8 ', '   11.57 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Putinga', '4315206', '  4 141 ', '  1 577 ', '  1 489 ', '   38.1 ', '   36.0 ', '   205.1 ', '   20.19 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Quaraí', '4315305', '  23 021 ', '  21 310 ', '  21 310 ', '   92.6 ', '   92.6 ', '  3 147.6 ', '   7.31 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Quatro Irmãos', '4315313', '  1 775 ', '   916 ', '   916 ', '   51.6 ', '   51.6 ', '   268.0 ', '   6.62 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Quevedos', '4315321', '  2 710 ', '   852 ', '   852 ', '   31.4 ', '   31.4 ', '   543.4 ', '   4.99 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Quinze de Novembro', '4315354', '  3 653 ', '  1 961 ', '  1 715 ', '   53.7 ', '   46.9 ', '   223.6 ', '   16.33 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Redentora', '4315404', '  10 222 ', '  3 002 ', '  2 754 ', '   29.4 ', '   26.9 ', '   302.7 ', '   33.77 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Relvado', '4315453', '  2 155 ', '   734 ', '   734 ', '   34.1 ', '   34.1 ', '   123.4 ', '   17.46 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Restinga Seca', '4315503', '  15 849 ', '  8 982 ', '  8 806 ', '   56.7 ', '   55.6 ', '   956.1 ', '   16.58 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Rio dos Índios', '4315552', '  3 616 ', '   755 ', '   663 ', '   20.9 ', '   18.3 ', '   237.0 ', '   15.26 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Rio Grande', '4315602', '  197 228 ', '  189 429 ', '  178 825 ', '   96.0 ', '   90.7 ', '  2 709.5 ', '   72.79 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Rio Pardo', '4315701', '  37 591 ', '  25 614 ', '  24 226 ', '   68.1 ', '   64.4 ', '  2 050.6 ', '   18.33 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Riozinho', '4315750', '  4 330 ', '  2 748 ', '  2 748 ', '   63.5 ', '   63.5 ', '   239.6 ', '   18.07 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Roca Sales', '4315800', '  10 284 ', '  6 600 ', '  6 501 ', '   64.2 ', '   63.2 ', '   208.6 ', '   49.29 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Rodeio Bonito', '4315909', '  5 743 ', '  4 310 ', '  4 103 ', '   75.0 ', '   71.4 ', '   83.2 ', '   69.03 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Rolador', '4315958', '  2 546 ', '   608 ', '   300 ', '   23.9 ', '   11.8 ', '   295.0 ', '   8.63 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Rolante', '4316006', '  19 485 ', '  15 310 ', '  12 563 ', '   78.6 ', '   64.5 ', '   295.6 ', '   65.91 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ronda Alta', '4316105', '  10 221 ', '  6 867 ', '  6 523 ', '   67.2 ', '   63.8 ', '   419.3 ', '   24.37 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Rondinha', '4316204', '  5 518 ', '  2 317 ', '  2 317 ', '   42.0 ', '   42.0 ', '   252.2 ', '   21.88 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Roque Gonzales', '4316303', '  7 203 ', '  3 087 ', '  2 659 ', '   42.9 ', '   36.9 ', '   346.6 ', '   20.78 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Rosário do Sul', '4316402', '  39 707 ', '  34 931 ', '  34 710 ', '   88.0 ', '   87.4 ', '  4 369.7 ', '   9.09 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Sagrada Família', '4316428', '  2 595 ', '   785 ', '   737 ', '   30.3 ', '   28.4 ', '   78.3 ', '   33.16 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Saldanha Marinho', '4316436', '  2 869 ', '  1 927 ', '  1 850 ', '   67.2 ', '   64.5 ', '   221.6 ', '   12.95 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Salto do Jacuí', '4316451', '  11 880 ', '  10 208 ', '  9 760 ', '   85.9 ', '   82.2 ', '   507.4 ', '   23.41 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Salvador das Missões', '4316477', '  2 669 ', '  1 094 ', '   610 ', '   41.0 ', '   22.9 ', '   94.0 ', '   28.38 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Salvador do Sul', '4316501', '  6 747 ', '  4 009 ', '  3 828 ', '   59.4 ', '   56.7 ', '   99.8 ', '   67.59 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Sananduva', '4316600', '  15 373 ', '  10 697 ', '  10 683 ', '   69.6 ', '   69.5 ', '   504.6 ', '   30.47 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santa Bárbara do Sul', '4316709', '  8 829 ', '  6 985 ', '  6 865 ', '   79.1 ', '   77.8 ', '   975.5 ', '   9.05 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santa Cecília do Sul', '4316733', '  1 655 ', '   480 ', '   480 ', '   29.0 ', '   29.0 ', '   199.4 ', '   8.30 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santa Clara do Sul', '4316758', '  5 697 ', '  2 855 ', '  2 855 ', '   50.1 ', '   50.1 ', '   86.6 ', '   65.75 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santa Cruz do Sul', '4316808', '  118 374 ', '  105 190 ', '  102 414 ', '   88.9 ', '   86.5 ', '   733.4 ', '   161.40 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santa Margarida do Sul', '4316972', '  2 352 ', '   552 ', '   541 ', '   23.5 ', '   23.0 ', '   955.3 ', '   2.46 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santa Maria', '4316907', '  261 031 ', '  248 347 ', '  246 465 ', '   95.1 ', '   94.4 ', '  1 788.1 ', '   145.98 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santa Maria do Herval', '4316956', '  6 053 ', '  4 362 ', '  4 362 ', '   72.1 ', '   72.1 ', '   139.6 ', '   43.36 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santa Rosa', '4317202', '  68 587 ', '  60 366 ', '  60 148 ', '   88.0 ', '   87.7 ', '   489.8 ', '   140.03 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santa Tereza', '4317251', '  1 720 ', '   627 ', '   627 ', '   36.5 ', '   36.5 ', '   72.4 ', '   23.76 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santa Vitória do Palmar', '4317301', '  30 990 ', '  26 890 ', '  24 394 ', '   86.8 ', '   78.7 ', '  5 244.4 ', '   5.91 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santana da Boa Vista', '4317004', '  8 242 ', '  3 723 ', '  3 723 ', '   45.2 ', '   45.2 ', '  1 420.6 ', '   5.80 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Sant''Ana do Livramento', '4317103', '  82 464 ', '  74 410 ', '  74 410 ', '   90.2 ', '   90.2 ', '  6 950.4 ', '   11.86 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santiago', '4317400', '  49 071 ', '  44 735 ', '  44 390 ', '   91.2 ', '   90.5 ', '  2 413.1 ', '   20.33 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santo Ângelo', '4317509', '  76 275 ', '  71 804 ', '  70 963 ', '   94.1 ', '   93.0 ', '   680.5 ', '   112.09 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santo Antônio da Patrulha', '4317608', '  39 685 ', '  28 114 ', '  24 166 ', '   70.8 ', '   60.9 ', '  1 049.8 ', '   37.80 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santo Antônio das Missões', '4317707', '  11 210 ', '  6 788 ', '  6 463 ', '   60.6 ', '   57.7 ', '  1 710.9 ', '   6.55 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santo Antônio do Palma', '4317558', '  2 139 ', '   681 ', '   532 ', '   31.8 ', '   24.9 ', '   126.1 ', '   16.96 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santo Antônio do Planalto', '4317756', '  1 987 ', '  1 233 ', '  1 180 ', '   62.1 ', '   59.4 ', '   203.4 ', '   9.77 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santo Augusto', '4317806', '  13 968 ', '  11 380 ', '  11 321 ', '   81.5 ', '   81.0 ', '   468.1 ', '   29.84 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santo Cristo', '4317905', '  14 378 ', '  7 781 ', '  7 179 ', '   54.1 ', '   49.9 ', '   366.9 ', '   39.19 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Santo Expedito do Sul', '4317954', '  2 461 ', '   872 ', '   872 ', '   35.4 ', '   35.4 ', '   125.7 ', '   19.57 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Borja', '4318002', '  61 671 ', '  55 138 ', '  54 701 ', '   89.4 ', '   88.7 ', '  3 616.0 ', '   17.05 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Domingos do Sul', '4318051', '  2 926 ', '  1 748 ', '  1 248 ', '   59.7 ', '   42.7 ', '   79.0 ', '   37.06 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Francisco de Assis', '4318101', '  19 254 ', '  13 495 ', '  13 382 ', '   70.1 ', '   69.5 ', '  2 508.5 ', '   7.68 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Francisco de Paula', '4318200', '  20 537 ', '  13 004 ', '  12 062 ', '   63.3 ', '   58.7 ', '  3 274.0 ', '   6.27 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Gabriel', '4318309', '  60 425 ', '  53 775 ', '  51 671 ', '   89.0 ', '   85.5 ', '  5 023.8 ', '   12.03 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Jerônimo', '4318408', '  22 134 ', '  17 055 ', '  16 525 ', '   77.1 ', '   74.7 ', '   936.4 ', '   23.64 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São João da Urtiga', '4318424', '  4 726 ', '  2 291 ', '  2 291 ', '   48.5 ', '   48.5 ', '   171.2 ', '   27.61 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São João do Polêsine', '4318432', '  2 635 ', '  1 354 ', '  1 030 ', '   51.4 ', '   39.1 ', '   85.2 ', '   30.94 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Jorge', '4318440', '  2 774 ', '  1 451 ', '  1 451 ', '   52.3 ', '   52.3 ', '   118.1 ', '   23.50 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São José das Missões', '4318457', '  2 720 ', '   828 ', '   828 ', '   30.4 ', '   30.4 ', '   98.1 ', '   27.74 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São José do Herval', '4318465', '  2 204 ', '   867 ', '   867 ', '   39.3 ', '   39.3 ', '   103.1 ', '   21.38 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São José do Hortêncio', '4318481', '  4 094 ', '  2 645 ', '  2 645 ', '   64.6 ', '   64.6 ', '   64.1 ', '   63.86 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São José do Inhacorá', '4318499', '  2 200 ', '   832 ', '   832 ', '   37.8 ', '   37.8 ', '   77.8 ', '   28.28 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São José do Norte', '4318507', '  25 503 ', '  17 383 ', '  16 617 ', '   68.2 ', '   65.2 ', '  1 118.1 ', '   22.81 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São José do Ouro', '4318606', '  6 904 ', '  4 423 ', '  4 274 ', '   64.1 ', '   61.9 ', '   334.8 ', '   20.62 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São José do Sul', '4318614', '  2 082 ', '   720 ', '   720 ', '   34.6 ', '   34.6 ', '   59.0 ', '   35.27 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São José dos Ausentes', '4318622', '  3 290 ', '  2 062 ', '  1 520 ', '   62.7 ', '   46.2 ', '  1 176.7 ', '   2.80 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Leopoldo', '4318705', '  214 087 ', '  213 238 ', '  213 238 ', '   99.6 ', '   99.6 ', '   102.7 ', '  2 083.79 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Lourenço do Sul', '4318804', '  43 111 ', '  24 237 ', '  23 382 ', '   56.2 ', '   54.2 ', '  2 036.1 ', '   21.17 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Luiz Gonzaga', '4318903', '  34 556 ', '  30 508 ', '  29 863 ', '   88.3 ', '   86.4 ', '  1 295.7 ', '   26.67 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Marcos', '4319000', '  20 103 ', '  17 598 ', '  17 172 ', '   87.5 ', '   85.4 ', '   256.3 ', '   78.45 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Martinho', '4319109', '  5 773 ', '  3 441 ', '  3 439 ', '   59.6 ', '   59.6 ', '   171.7 ', '   33.63 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Martinho da Serra', '4319125', '  3 201 ', '   942 ', '   942 ', '   29.4 ', '   29.4 ', '   669.6 ', '   4.78 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Miguel das Missões', '4319158', '  7 421 ', '  3 727 ', '  3 328 ', '   50.2 ', '   44.8 ', '  1 229.8 ', '   6.03 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Nicolau', '4319208', '  5 727 ', '  3 692 ', '  3 490 ', '   64.5 ', '   60.9 ', '   485.3 ', '   11.80 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Paulo das Missões', '4319307', '  6 364 ', '  2 199 ', '  2 083 ', '   34.6 ', '   32.7 ', '   223.9 ', '   28.43 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Pedro da Serra', '4319356', '  3 315 ', '  1 429 ', '  1 429 ', '   43.1 ', '   43.1 ', '   35.4 ', '   93.68 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Pedro das Missões', '4319364', '  1 886 ', '   532 ', '   532 ', '   28.2 ', '   28.2 ', '   80.0 ', '   23.59 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Pedro do Butiá', '4319372', '  2 873 ', '  1 209 ', '  1 100 ', '   42.1 ', '   38.3 ', '   107.6 ', '   26.69 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Pedro do Sul', '4319406', '  16 368 ', '  11 929 ', '  11 864 ', '   72.9 ', '   72.5 ', '   873.6 ', '   18.74 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Sebastião do Caí', '4319505', '  21 932 ', '  17 608 ', '  14 136 ', '   80.3 ', '   64.5 ', '   111.4 ', '   196.81 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Sepé', '4319604', '  23 798 ', '  18 821 ', '  18 111 ', '   79.1 ', '   76.1 ', '  2 200.7 ', '   10.81 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Valentim', '4319703', '  3 632 ', '  1 744 ', '  1 744 ', '   48.0 ', '   48.0 ', '   154.2 ', '   23.56 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Valentim do Sul', '4319711', '  2 168 ', '   746 ', '   522 ', '   34.4 ', '   24.1 ', '   92.2 ', '   23.50 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Valério do Sul', '4319737', '  2 647 ', '   510 ', '   510 ', '   19.3 ', '   19.3 ', '   108.0 ', '   24.52 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Vendelino', '4319752', '  1 944 ', '  1 353 ', '  1 353 ', '   69.6 ', '   69.6 ', '   32.1 ', '   60.59 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('São Vicente do Sul', '4319802', '  8 440 ', '  5 881 ', '  5 794 ', '   69.7 ', '   68.6 ', '  1 175.2 ', '   7.18 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Sapiranga', '4319901', '  74 985 ', '  72 286 ', '  69 644 ', '   96.4 ', '   92.9 ', '   138.3 ', '   542.13 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Sapucaia do Sul', '4320008', '  130 957 ', '  130 469 ', '  130 469 ', '   99.6 ', '   99.6 ', '   58.3 ', '  2 245.91 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Sarandi', '4320107', '  21 285 ', '  17 940 ', '  17 598 ', '   84.3 ', '   82.7 ', '   353.4 ', '   60.23 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Seberi', '4320206', '  10 897 ', '  5 923 ', '  5 814 ', '   54.4 ', '   53.4 ', '   301.4 ', '   36.15 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Sede Nova', '4320230', '  3 011 ', '  1 581 ', '  1 555 ', '   52.5 ', '   51.6 ', '   119.3 ', '   25.24 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Segredo', '4320263', '  7 158 ', '  1 807 ', '  1 197 ', '   25.2 ', '   16.7 ', '   247.4 ', '   28.93 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Selbach', '4320305', '  4 929 ', '  3 450 ', '  2 999 ', '   70.0 ', '   60.8 ', '   177.6 ', '   27.75 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Senador Salgado Filho', '4320321', '  2 814 ', '   880 ', '   708 ', '   31.3 ', '   25.2 ', '   147.2 ', '   19.12 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Sentinela do Sul', '4320354', '  5 198 ', '  1 282 ', '  1 282 ', '   24.7 ', '   24.7 ', '   282.0 ', '   18.43 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Serafina Corrêa', '4320404', '  14 253 ', '  12 054 ', '  11 865 ', '   84.6 ', '   83.2 ', '   163.3 ', '   87.29 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Sério', '4320453', '  2 281 ', '   530 ', '   530 ', '   23.2 ', '   23.2 ', '   99.6 ', '   22.90 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Sertão', '4320503', '  6 294 ', '  3 387 ', '  3 129 ', '   53.8 ', '   49.7 ', '   439.5 ', '   14.32 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Sertão Santana', '4320552', '  5 850 ', '  1 278 ', '  1 278 ', '   21.8 ', '   21.8 ', '   251.8 ', '   23.23 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Sete de Setembro', '4320578', '  2 124 ', '   494 ', '   494 ', '   23.3 ', '   23.3 ', '   130.0 ', '   16.34 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Severiano de Almeida', '4320602', '  3 842 ', '  1 399 ', '  1 355 ', '   36.4 ', '   35.3 ', '   167.6 ', '   22.92 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Silveira Martins', '4320651', '  2 449 ', '  1 091 ', '  1 091 ', '   44.5 ', '   44.5 ', '   118.4 ', '   20.68 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Sinimbu', '4320677', '  10 068 ', '  1 437 ', '  1 437 ', '   14.3 ', '   14.3 ', '   510.1 ', '   19.74 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Sobradinho', '4320701', '  14 283 ', '  11 347 ', '  11 347 ', '   79.4 ', '   79.4 ', '   130.4 ', '   109.54 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Soledade', '4320800', '  30 044 ', '  24 032 ', '  23 784 ', '   80.0 ', '   79.2 ', '  1 213.4 ', '   24.76 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Tabaí', '4320859', '  4 131 ', '  1 246 ', '  1 246 ', '   30.2 ', '   30.2 ', '   94.8 ', '   43.60 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Tapejara', '4320909', '  19 250 ', '  17 080 ', '  17 025 ', '   88.7 ', '   88.4 ', '   238.8 ', '   80.61 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Tapera', '4321006', '  10 448 ', '  8 820 ', '  8 070 ', '   84.4 ', '   77.2 ', '   179.7 ', '   58.15 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Tapes', '4321105', '  16 629 ', '  14 478 ', '  14 478 ', '   87.1 ', '   87.1 ', '   806.3 ', '   20.62 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Taquara', '4321204', '  54 643 ', '  45 266 ', '  42 108 ', '   82.8 ', '   77.1 ', '   457.9 ', '   119.35 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Taquari', '4321303', '  26 092 ', '  21 875 ', '  21 811 ', '   83.8 ', '   83.6 ', '   350.0 ', '   74.56 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Taquaruçu do Sul', '4321329', '  2 966 ', '  1 164 ', '  1 164 ', '   39.2 ', '   39.2 ', '   76.8 ', '   38.60 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Tavares', '4321352', '  5 351 ', '  3 299 ', '  3 178 ', '   61.7 ', '   59.4 ', '   604.3 ', '   8.86 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Tenente Portela', '4321402', '  13 719 ', '  8 847 ', '  8 648 ', '   64.5 ', '   63.0 ', '   338.1 ', '   40.58 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Terra de Areia', '4321436', '  9 878 ', '  5 195 ', '  4 607 ', '   52.6 ', '   46.6 ', '   141.8 ', '   69.67 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Teutônia', '4321451', '  27 272 ', '  23 322 ', '  23 210 ', '   85.5 ', '   85.1 ', '   178.6 ', '   152.68 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Tio Hugo', '4321469', '  2 724 ', '  1 164 ', '  1 164 ', '   42.7 ', '   42.7 ', '   114.2 ', '   23.85 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Tiradentes do Sul', '4321477', '  6 461 ', '  2 098 ', '  1 205 ', '   32.5 ', '   18.7 ', '   234.5 ', '   27.55 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Toropi', '4321493', '  2 952 ', '   611 ', '   596 ', '   20.7 ', '   20.2 ', '   203.0 ', '   14.54 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Torres', '4321501', '  34 656 ', '  33 340 ', '  33 215 ', '   96.2 ', '   95.8 ', '   160.2 ', '   216.34 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Tramandaí', '4321600', '  41 585 ', '  40 577 ', '  32 007 ', '   97.6 ', '   77.0 ', '   144.4 ', '   287.97 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Travesseiro', '4321626', '  2 314 ', '   887 ', '   887 ', '   38.3 ', '   38.3 ', '   81.1 ', '   28.52 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Três Arroios', '4321634', '  2 855 ', '  1 027 ', '   996 ', '   36.0 ', '   34.9 ', '   148.6 ', '   19.21 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Três Cachoeiras', '4321667', '  10 217 ', '  7 501 ', '  5 968 ', '   73.4 ', '   58.4 ', '   251.1 ', '   40.70 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Três Coroas', '4321709', '  23 848 ', '  20 546 ', '  20 546 ', '   86.2 ', '   86.2 ', '   185.5 ', '   128.53 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Três de Maio', '4321808', '  23 726 ', '  18 962 ', '  18 105 ', '   79.9 ', '   76.3 ', '   422.2 ', '   56.20 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Três Forquilhas', '4321832', '  2 914 ', '   385 ', '   385 ', '   13.2 ', '   13.2 ', '   217.4 ', '   13.40 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Três Palmeiras', '4321857', '  4 381 ', '  2 090 ', '  1 835 ', '   47.7 ', '   41.9 ', '   180.6 ', '   24.26 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Três Passos', '4321907', '  23 965 ', '  19 054 ', '  16 715 ', '   79.5 ', '   69.7 ', '   268.4 ', '   89.29 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Trindade do Sul', '4321956', '  5 787 ', '  2 899 ', '  2 899 ', '   50.1 ', '   50.1 ', '   268.4 ', '   21.56 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Triunfo', '4322004', '  25 793 ', '  16 857 ', '  10 304 ', '   65.4 ', '   39.9 ', '   818.8 ', '   31.50 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Tucunduva', '4322103', '  5 898 ', '  4 035 ', '  4 035 ', '   68.4 ', '   68.4 ', '   180.8 ', '   32.62 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Tunas', '4322152', '  4 395 ', '  1 375 ', '  1 135 ', '   31.3 ', '   25.8 ', '   218.1 ', '   20.15 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Tupanci do Sul', '4322186', '  1 573 ', '   473 ', '   473 ', '   30.1 ', '   30.1 ', '   135.1 ', '   11.64 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Tupanciretã', '4322202', '  22 281 ', '  18 020 ', '  17 995 ', '   80.9 ', '   80.8 ', '  2 251.9 ', '   9.89 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Tupandi', '4322251', '  3 924 ', '  2 721 ', '  2 498 ', '   69.3 ', '   63.7 ', '   59.5 ', '   65.90 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Tuparendi', '4322301', '  8 557 ', '  5 294 ', '  4 977 ', '   61.9 ', '   58.2 ', '   307.7 ', '   27.81 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Turuçu', '4322327', '  3 522 ', '  1 487 ', '  1 487 ', '   42.2 ', '   42.2 ', '   253.6 ', '   13.89 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Ubiretama', '4322343', '  2 296 ', '   500 ', '   500 ', '   21.8 ', '   21.8 ', '   126.7 ', '   18.12 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('União da Serra', '4322350', '  1 487 ', '   280 ', '   33 ', '   18.8 ', '   2.2 ', '   131.0 ', '   11.35 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Unistalda', '4322376', '  2 450 ', '   913 ', '   913 ', '   37.3 ', '   37.3 ', '   602.4 ', '   4.07 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Uruguaiana', '4322400', '  125 435 ', '  117 415 ', '  116 289 ', '   93.6 ', '   92.7 ', '  5 715.8 ', '   21.95 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vacaria', '4322509', '  61 342 ', '  57 339 ', '  56 993 ', '   93.5 ', '   92.9 ', '  2 123.7 ', '   28.88 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vale do Sol', '4322533', '  11 077 ', '  1 249 ', '  1 249 ', '   11.3 ', '   11.3 ', '   328.2 ', '   33.75 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vale Real', '4322541', '  5 118 ', '  4 566 ', '  3 207 ', '   89.2 ', '   62.7 ', '   45.1 ', '   113.52 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vale Verde', '4322525', '  3 253 ', '   882 ', '   873 ', '   27.1 ', '   26.8 ', '   329.7 ', '   9.87 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vanini', '4322558', '  1 984 ', '  1 001 ', '  1 001 ', '   50.5 ', '   50.5 ', '   64.9 ', '   30.58 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Venâncio Aires', '4322608', '  65 946 ', '  41 400 ', '  39 274 ', '   62.8 ', '   59.6 ', '   773.2 ', '   85.28 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vera Cruz', '4322707', '  23 983 ', '  13 320 ', '  13 320 ', '   55.5 ', '   55.5 ', '   309.6 ', '   77.46 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Veranópolis', '4322806', '  22 810 ', '  19 843 ', '  19 843 ', '   87.0 ', '   87.0 ', '   289.3 ', '   78.83 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vespasiano Correa', '4322855', '  1 974 ', '   406 ', '   406 ', '   20.6 ', '   20.6 ', '   113.9 ', '   17.33 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Viadutos', '4322905', '  5 311 ', '  2 643 ', '  2 643 ', '   49.8 ', '   49.8 ', '   268.4 ', '   19.79 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Viamão', '4323002', '  239 384 ', '  224 943 ', '  87 929 ', '   94.0 ', '   36.7 ', '  1 497.0 ', '   159.91 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vicente Dutra', '4323101', '  5 285 ', '  2 351 ', '  1 976 ', '   44.5 ', '   37.4 ', '   195.0 ', '   27.10 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Victor Graeff', '4323200', '  3 036 ', '  1 284 ', '  1 225 ', '   42.3 ', '   40.3 ', '   238.3 ', '   12.74 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vila Flores', '4323309', '  3 207 ', '  1 348 ', '  1 249 ', '   42.0 ', '   38.9 ', '   107.9 ', '   29.72 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vila Lângaro', '4323358', '  2 152 ', '   366 ', '   366 ', '   17.0 ', '   17.0 ', '   152.2 ', '   14.14 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vila Maria', '4323408', '  4 221 ', '  2 249 ', '  2 249 ', '   53.3 ', '   53.3 ', '   181.4 ', '   23.26 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vila Nova do Sul', '4323457', '  4 221 ', '  2 194 ', '  2 194 ', '   52.0 ', '   52.0 ', '   507.9 ', '   8.31 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vista Alegre', '4323507', '  2 832 ', '  1 185 ', '  1 185 ', '   41.8 ', '   41.8 ', '   77.5 ', '   36.56 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vista Alegre do Prata', '4323606', '  1 569 ', '   463 ', '   463 ', '   29.5 ', '   29.5 ', '   119.3 ', '   13.15 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vista Gaúcha', '4323705', '  2 759 ', '   965 ', '   814 ', '   35.0 ', '   29.5 ', '   88.7 ', '   31.10 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Vitória das Missões', '4323754', '  3 485 ', '   669 ', '   604 ', '   19.2 ', '   17.3 ', '   259.6 ', '   13.42 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Westfalia', '4323770', '  2 793 ', '  1 130 ', '  1 130 ', '   40.5 ', '   40.5 ', '   64.0 ', '   43.64 ');
  INSERT INTO public.entidades
  (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
  VALUES('Xangri-lá', '4323804', '  12 434 ', '  12 379 ', '  5 922 ', '   99.6 ', '   47.6 ', '   60.7 ', '   204.88 ');
  `
  await Database.rawQuery(query)

  return { hello: 'world' }
})
