import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run() {
    this.client.raw(`
    INSERT INTO public.entidades
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Rio Grande do Sul', '43', '10 693 929 ', '9 100 291 ', '8 744 154 ', '   85.1 ', '   81.8 ', '268 781.9 ', '   39.79 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Aceguá', '4300034', '  4 394 ', '  1 059 ', '  1 059 ', '   24.1 ', '   24.1 ', '  1 549.4 ', '   2.84 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Água Santa', '4300059', '  3 722 ', '  1 447 ', '  1 356 ', '   38.9 ', '   36.4 ', '   291.8 ', '   12.76 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Agudo', '4300109', '  16 722 ', '  6 889 ', '  6 889 ', '   41.2 ', '   41.2 ', '   536.1 ', '   31.19 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Ajuricaba', '4300208', '  7 255 ', '  4 108 ', '  3 872 ', '   56.6 ', '   53.4 ', '   323.2 ', '   22.44 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Alecrim', '4300307', '  7 045 ', '  2 165 ', '  2 165 ', '   30.7 ', '   30.7 ', '   314.7 ', '   22.38 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Alegrete', '4300406', '  77 653 ', '  69 594 ', '  69 009 ', '   89.6 ', '   88.9 ', '  7 804.0 ', '   9.95 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Alegria', '4300455', '  4 301 ', '  1 585 ', '  1 353 ', '   36.9 ', '   31.5 ', '   172.7 ', '   24.91 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Almirante Tamandaré do Sul', '4300471', '  2 067 ', '   839 ', '   642 ', '   40.6 ', '   31.1 ', '   265.4 ', '   7.79 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Alpestre', '4300505', '  8 027 ', '  2 211 ', '  2 002 ', '   27.5 ', '   24.9 ', '   328.8 ', '   24.42 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Alto Alegre', '4300554', '  1 848 ', '   743 ', '   662 ', '   40.2 ', '   35.8 ', '   114.4 ', '   16.15 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Alto Feliz', '4300570', '  2 917 ', '   816 ', '   816 ', '   28.0 ', '   28.0 ', '   79.2 ', '   36.84 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Alvorada', '4300604', '  195 673 ', '  195 673 ', '  175 490 ', '   100.0 ', '   89.7 ', '   71.3 ', '  2 743.94 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Amaral Ferrador', '4300638', '  6 353 ', '  1 866 ', '  1 388 ', '   29.4 ', '   21.8 ', '   506.5 ', '   12.54 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Ametista do Sul', '4300646', '  7 323 ', '  3 811 ', '  3 624 ', '   52.0 ', '   49.5 ', '   93.5 ', '   78.33 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('André da Rocha', '4300661', '  1 216 ', '   496 ', '   496 ', '   40.8 ', '   40.8 ', '   324.3 ', '   3.75 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Anta Gorda', '4300703', '  6 073 ', '  2 331 ', '  2 242 ', '   38.4 ', '   36.9 ', '   243.0 ', '   25.00 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Antônio Prado', '4300802', '  12 833 ', '  9 235 ', '  9 221 ', '   72.0 ', '   71.9 ', '   347.6 ', '   36.92 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Arambaré', '4300851', '  3 693 ', '  2 913 ', '  2 176 ', '   78.9 ', '   58.9 ', '   519.1 ', '   7.11 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Araricá', '4300877', '  4 864 ', '  3 996 ', '  3 996 ', '   82.2 ', '   82.2 ', '   35.3 ', '   137.83 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Aratiba', '4300901', '  6 565 ', '  3 316 ', '  2 936 ', '   50.5 ', '   44.7 ', '   341.3 ', '   19.23 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Arroio do Meio', '4301008', '  18 783 ', '  14 663 ', '  13 957 ', '   78.1 ', '   74.3 ', '   158.0 ', '   118.91 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Arroio do Padre', '4301073', '  2 730 ', '   454 ', '   213 ', '   16.6 ', '   7.8 ', '   124.3 ', '   21.96 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Arroio do Sal', '4301057', '  7 740 ', '  7 509 ', '  7 509 ', '   97.0 ', '   97.0 ', '   120.9 ', '   64.01 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Arroio do Tigre', '4301206', '  12 648 ', '  5 962 ', '  5 551 ', '   47.1 ', '   43.9 ', '   318.2 ', '   39.74 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Arroio dos Ratos', '4301107', '  13 606 ', '  12 956 ', '  12 956 ', '   95.2 ', '   95.2 ', '   425.9 ', '   31.94 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Arroio Grande', '4301305', '  18 470 ', '  16 085 ', '  15 605 ', '   87.1 ', '   84.5 ', '  2 513.6 ', '   7.35 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Arvorezinha', '4301404', '  10 225 ', '  6 273 ', '  6 180 ', '   61.3 ', '   60.4 ', '   271.6 ', '   37.64 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Augusto Pestana', '4301503', '  7 096 ', '  3 657 ', '  3 508 ', '   51.5 ', '   49.4 ', '   347.4 ', '   20.42 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Áurea', '4301552', '  3 665 ', '  1 537 ', '  1 537 ', '   41.9 ', '   41.9 ', '   158.3 ', '   23.15 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Bagé', '4301602', '  116 794 ', '  97 765 ', '  97 762 ', '   83.7 ', '   83.7 ', '  4 095.6 ', '   28.52 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Balneário Pinhal', '4301636', '  10 856 ', '  10 743 ', '  5 421 ', '   99.0 ', '   49.9 ', '   103.8 ', '   104.63 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Barão', '4301651', '  5 741 ', '  2 970 ', '  2 518 ', '   51.7 ', '   43.9 ', '   124.5 ', '   46.12 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Barão de Cotegipe', '4301701', '  6 529 ', '  3 966 ', '  3 890 ', '   60.7 ', '   59.6 ', '   260.1 ', '   25.10 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Barão do Triunfo', '4301750', '  7 018 ', '   697 ', '   697 ', '   9.9 ', '   9.9 ', '   436.4 ', '   16.08 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Barra do Guarita', '4301859', '  3 089 ', '  1 371 ', '  1 371 ', '   44.4 ', '   44.4 ', '   64.6 ', '   47.82 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Barra do Quaraí', '4301875', '  4 012 ', '  2 840 ', '  2 836 ', '   70.8 ', '   70.7 ', '  1 056.1 ', '   3.80 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Barra do Ribeiro', '4301909', '  12 572 ', '  9 291 ', '  9 095 ', '   73.9 ', '   72.3 ', '   729.0 ', '   17.25 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Barra do Rio Azul', '4301925', '  2 003 ', '   403 ', '   403 ', '   20.1 ', '   20.1 ', '   147.0 ', '   13.62 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Barra Funda', '4301958', '  2 367 ', '  1 522 ', '  1 445 ', '   64.3 ', '   61.0 ', '   60.0 ', '   39.43 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Barracão', '4301800', '  5 357 ', '  3 037 ', '  2 865 ', '   56.7 ', '   53.5 ', '   516.3 ', '   10.38 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Barros Cassal', '4302006', '  11 133 ', '  3 531 ', '  3 531 ', '   31.7 ', '   31.7 ', '   648.9 ', '   17.16 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Benjamin Constant do Sul', '4302055', '  2 307 ', '   341 ', '   262 ', '   14.8 ', '   11.4 ', '   132.4 ', '   17.42 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Bento Gonçalves', '4302105', '  107 278 ', '  99 069 ', '  96 591 ', '   92.3 ', '   90.0 ', '   382.0 ', '   280.86 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Boa Vista das Missões', '4302154', '  2 114 ', '   886 ', '   806 ', '   41.9 ', '   38.1 ', '   194.8 ', '   10.85 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Boa Vista do Buricá', '4302204', '  6 574 ', '  4 366 ', '  4 006 ', '   66.4 ', '   60.9 ', '   108.7 ', '   60.46 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Boa Vista do Cadeado', '4302220', '  2 441 ', '   472 ', '   433 ', '   19.3 ', '   17.7 ', '   701.1 ', '   3.48 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Boa Vista do Incra', '4302238', '  2 425 ', '   724 ', '   724 ', '   29.9 ', '   29.9 ', '   503.5 ', '   4.82 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Boa Vista do Sul', '4302253', '  2 776 ', '   391 ', '   391 ', '   14.1 ', '   14.1 ', '   94.3 ', '   29.42 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Bom Jesus', '4302303', '  11 519 ', '  8 593 ', '  8 326 ', '   74.6 ', '   72.3 ', '  2 625.7 ', '   4.39 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Bom Princípio', '4302352', '  11 789 ', '  9 198 ', '  9 198 ', '   78.0 ', '   78.0 ', '   88.5 ', '   133.20 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Bom Progresso', '4302378', '  2 328 ', '  1 146 ', '  1 146 ', '   49.2 ', '   49.2 ', '   88.7 ', '   26.23 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Bom Retiro do Sul', '4302402', '  11 472 ', '  9 162 ', '  9 130 ', '   79.9 ', '   79.6 ', '   102.3 ', '   112.11 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Boqueirão do Leão', '4302451', '  7 673 ', '  1 672 ', '  1 672 ', '   21.8 ', '   21.8 ', '   265.4 ', '   28.91 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Bossoroca', '4302501', '  6 884 ', '  3 682 ', '  3 497 ', '   53.5 ', '   50.8 ', '  1 610.6 ', '   4.27 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Bozano', '4302584', '  2 200 ', '   629 ', '   502 ', '   28.6 ', '   22.8 ', '   201.0 ', '   10.94 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Braga', '4302600', '  3 702 ', '  2 282 ', '  1 887 ', '   61.6 ', '   51.0 ', '   129.0 ', '   28.70 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Brochier', '4302659', '  4 675 ', '  2 296 ', '  2 100 ', '   49.1 ', '   44.9 ', '   106.7 ', '   43.80 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Butiá', '4302709', '  20 406 ', '  19 330 ', '  19 330 ', '   94.7 ', '   94.7 ', '   752.3 ', '   27.13 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Caçapava do Sul', '4302808', '  33 690 ', '  25 410 ', '  24 982 ', '   75.4 ', '   74.2 ', '  3 047.1 ', '   11.06 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cacequi', '4302907', '  13 676 ', '  11 952 ', '  10 632 ', '   87.4 ', '   77.7 ', '  2 370.0 ', '   5.77 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cachoeira do Sul', '4303004', '  83 827 ', '  71 700 ', '  70 695 ', '   85.5 ', '   84.3 ', '  3 735.2 ', '   22.44 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cachoeirinha', '4303103', '  118 278 ', '  118 278 ', '  118 278 ', '   100.0 ', '   100.0 ', '   44.0 ', '  2 687.04 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cacique Doble', '4303202', '  4 868 ', '  1 628 ', '  1 581 ', '   33.4 ', '   32.5 ', '   203.9 ', '   23.87 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Caibaté', '4303301', '  4 954 ', '  2 745 ', '  2 745 ', '   55.4 ', '   55.4 ', '   259.7 ', '   19.08 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Caiçara', '4303400', '  5 071 ', '  1 594 ', '  1 383 ', '   31.4 ', '   27.3 ', '   189.2 ', '   26.80 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Camaquã', '4303509', '  62 764 ', '  49 356 ', '  48 393 ', '   78.6 ', '   77.1 ', '  1 679.4 ', '   37.37 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Camargo', '4303558', '  2 592 ', '  1 095 ', '  1 095 ', '   42.2 ', '   42.2 ', '   138.1 ', '   18.77 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cambará do Sul', '4303608', '  6 542 ', '  3 041 ', '  1 633 ', '   46.5 ', '   25.0 ', '  1 212.5 ', '   5.40 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Campestre da Serra', '4303673', '  3 247 ', '  1 231 ', '   757 ', '   37.9 ', '   23.3 ', '   538.0 ', '   6.04 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Campina das Missões', '4303707', '  6 117 ', '  2 188 ', '  2 188 ', '   35.8 ', '   35.8 ', '   225.8 ', '   27.09 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Campinas do Sul', '4303806', '  5 506 ', '  4 217 ', '  4 217 ', '   76.6 ', '   76.6 ', '   276.2 ', '   19.94 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Campo Bom', '4303905', '  60 074 ', '  57 338 ', '  57 338 ', '   95.4 ', '   95.4 ', '   60.5 ', '   992.79 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Campo Novo', '4304002', '  5 459 ', '  4 109 ', '  3 872 ', '   75.3 ', '   70.9 ', '   222.1 ', '   24.58 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Campos Borges', '4304101', '  3 494 ', '  2 006 ', '  1 960 ', '   57.4 ', '   56.1 ', '   226.6 ', '   15.42 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Candelária', '4304200', '  30 171 ', '  15 715 ', '  14 737 ', '   52.1 ', '   48.8 ', '   943.9 ', '   31.96 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cândido Godói', '4304309', '  6 535 ', '  1 846 ', '  1 846 ', '   28.2 ', '   28.2 ', '   246.3 ', '   26.54 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Candiota', '4304358', '  8 771 ', '  2 598 ', '   751 ', '   29.6 ', '   8.6 ', '   933.8 ', '   9.39 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Canela', '4304408', '  39 229 ', '  35 831 ', '  35 831 ', '   91.3 ', '   91.3 ', '   253.8 ', '   154.58 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Canguçu', '4304507', '  53 259 ', '  19 694 ', '  19 694 ', '   37.0 ', '   37.0 ', '  3 525.3 ', '   15.11 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Canoas', '4304606', '  323 827 ', '  323 827 ', '  323 827 ', '   100.0 ', '   100.0 ', '   131.1 ', '  2 470.13 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Canudos do Vale', '4304614', '  1 807 ', '   411 ', '   411 ', '   22.7 ', '   22.7 ', '   81.9 ', '   22.06 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Capão Bonito do Sul', '4304622', '  1 754 ', '   499 ', '   393 ', '   28.4 ', '   22.4 ', '   527.1 ', '   3.33 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Capão da Canoa', '4304630', '  42 040 ', '  41 787 ', '  36 599 ', '   99.4 ', '   87.1 ', '   97.1 ', '   432.96 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Capão do Cipó', '4304655', '  3 104 ', '   519 ', '   519 ', '   16.7 ', '   16.7 ', '  1 008.7 ', '   3.08 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Capão do Leão', '4304663', '  24 298 ', '  22 382 ', '  22 354 ', '   92.1 ', '   92.0 ', '   785.4 ', '   30.94 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Capela de Santana', '4304689', '  11 612 ', '  6 915 ', '  6 915 ', '   59.6 ', '   59.6 ', '   183.8 ', '   63.19 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Capitão', '4304697', '  2 636 ', '  1 147 ', '  1 147 ', '   43.5 ', '   43.5 ', '   74.0 ', '   35.64 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Capivari do Sul', '4304671', '  3 890 ', '  3 230 ', '  2 760 ', '   83.0 ', '   71.0 ', '   412.8 ', '   9.42 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Caraá', '4304713', '  7 312 ', '  1 058 ', '  1 058 ', '   14.5 ', '   14.5 ', '   294.3 ', '   24.84 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Carazinho', '4304705', '  59 317 ', '  58 253 ', '  57 922 ', '   98.2 ', '   97.6 ', '   665.1 ', '   89.19 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Carlos Barbosa', '4304804', '  25 192 ', '  19 992 ', '  19 181 ', '   79.4 ', '   76.1 ', '   228.7 ', '   110.17 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Carlos Gomes', '4304853', '  1 607 ', '   378 ', '   378 ', '   23.5 ', '   23.5 ', '   83.2 ', '   19.33 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Casca', '4304903', '  8 651 ', '  5 090 ', '  5 005 ', '   58.8 ', '   57.9 ', '   271.7 ', '   31.83 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Caseiros', '4304952', '  3 007 ', '  1 488 ', '  1 488 ', '   49.5 ', '   49.5 ', '   235.7 ', '   12.76 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Catuípe', '4305009', '  9 323 ', '  5 998 ', '  5 680 ', '   64.3 ', '   60.9 ', '   583.3 ', '   15.98 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Caxias do Sul', '4305108', '  435 564 ', '  419 406 ', '  415 436 ', '   96.3 ', '   95.4 ', '  1 644.3 ', '   264.89 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Centenário', '4305116', '  2 965 ', '   949 ', '   863 ', '   32.0 ', '   29.1 ', '   134.3 ', '   22.07 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cerrito', '4305124', '  6 402 ', '  3 747 ', '  3 495 ', '   58.5 ', '   54.6 ', '   451.7 ', '   14.17 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cerro Branco', '4305132', '  4 454 ', '  1 274 ', '  1 274 ', '   28.6 ', '   28.6 ', '   158.8 ', '   28.05 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cerro Grande', '4305157', '  2 417 ', '   830 ', '   830 ', '   34.3 ', '   34.3 ', '   73.4 ', '   32.91 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cerro Grande do Sul', '4305173', '  10 268 ', '  2 484 ', '  2 167 ', '   24.2 ', '   21.1 ', '   324.8 ', '   31.61 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cerro Largo', '4305207', '  13 289 ', '  10 571 ', '  10 306 ', '   79.5 ', '   77.6 ', '   177.7 ', '   74.79 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Chapada', '4305306', '  9 377 ', '  5 573 ', '  4 859 ', '   59.4 ', '   51.8 ', '   684.0 ', '   13.71 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Charqueadas', '4305355', '  35 320 ', '  34 490 ', '  34 490 ', '   97.7 ', '   97.7 ', '   216.5 ', '   163.13 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Charrua', '4305371', '  3 471 ', '   584 ', '   584 ', '   16.8 ', '   16.8 ', '   198.1 ', '   17.52 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Chiapetta', '4305405', '  4 044 ', '  2 470 ', '  2 470 ', '   61.1 ', '   61.1 ', '   396.6 ', '   10.20 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Chuí', '4305439', '  5 917 ', '  5 697 ', '  5 697 ', '   96.3 ', '   96.3 ', '   202.6 ', '   29.21 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Chuvisca', '4305447', '  4 944 ', '   273 ', '   273 ', '   5.5 ', '   5.5 ', '   220.5 ', '   22.42 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cidreira', '4305454', '  12 668 ', '  12 260 ', '  10 786 ', '   96.8 ', '   85.1 ', '   245.9 ', '   51.52 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Ciríaco', '4305504', '  4 922 ', '  2 494 ', '  2 334 ', '   50.7 ', '   47.4 ', '   273.9 ', '   17.97 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Colinas', '4305587', '  2 420 ', '  1 105 ', '  1 105 ', '   45.7 ', '   45.7 ', '   58.4 ', '   41.46 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Colorado', '4305603', '  3 550 ', '  1 844 ', '  1 704 ', '   51.9 ', '   48.0 ', '   285.3 ', '   12.44 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Condor', '4305702', '  6 552 ', '  4 034 ', '  4 034 ', '   61.6 ', '   61.6 ', '   465.2 ', '   14.08 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Constantina', '4305801', '  9 752 ', '  6 510 ', '  6 322 ', '   66.8 ', '   64.8 ', '   203.0 ', '   48.04 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Coqueiro Baixo', '4305835', '  1 528 ', '   282 ', '   234 ', '   18.5 ', '   15.3 ', '   112.3 ', '   13.61 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Coqueiros do Sul', '4305850', '  2 457 ', '   904 ', '   495 ', '   36.8 ', '   20.1 ', '   275.6 ', '   8.92 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Coronel Barros', '4305871', '  2 459 ', '  1 093 ', '  1 093 ', '   44.4 ', '   44.4 ', '   162.9 ', '   15.09 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Coronel Bicaco', '4305900', '  7 748 ', '  5 068 ', '  4 683 ', '   65.4 ', '   60.4 ', '   492.1 ', '   15.74 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Coronel Pilar', '4305934', '  1 725 ', '   174 ', '   174 ', '   10.1 ', '   10.1 ', '   105.4 ', '   16.36 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cotiporã', '4305959', '  3 917 ', '  2 048 ', '  1 932 ', '   52.3 ', '   49.3 ', '   172.4 ', '   22.72 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Coxilha', '4305975', '  2 826 ', '  1 739 ', '  1 739 ', '   61.5 ', '   61.5 ', '   422.8 ', '   6.68 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Crissiumal', '4306007', '  14 084 ', '  6 124 ', '  5 470 ', '   43.5 ', '   38.8 ', '   362.2 ', '   38.89 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cristal', '4306056', '  7 280 ', '  4 077 ', '  3 853 ', '   56.0 ', '   52.9 ', '   681.6 ', '   10.68 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cristal do Sul', '4306072', '  2 826 ', '   931 ', '   931 ', '   32.9 ', '   32.9 ', '   97.7 ', '   28.92 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cruz Alta', '4306106', '  62 821 ', '  60 594 ', '  60 588 ', '   96.5 ', '   96.4 ', '  1 360.4 ', '   46.18 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cruzaltense', '4306130', '  2 141 ', '   489 ', '   489 ', '   22.8 ', '   22.8 ', '   166.9 ', '   12.83 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Cruzeiro do Sul', '4306205', '  12 320 ', '  7 476 ', '  7 476 ', '   60.7 ', '   60.7 ', '   155.6 ', '   79.20 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('David Canabarro', '4306304', '  4 683 ', '  1 912 ', '  1 912 ', '   40.8 ', '   40.8 ', '   174.9 ', '   26.77 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Derrubadas', '4306320', '  3 190 ', '   901 ', '   901 ', '   28.2 ', '   28.2 ', '   361.3 ', '   8.83 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Dezesseis de Novembro', '4306353', '  2 866 ', '   667 ', '   667 ', '   23.3 ', '   23.3 ', '   216.8 ', '   13.22 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Dilermando de Aguiar', '4306379', '  3 064 ', '   991 ', '   991 ', '   32.3 ', '   32.3 ', '   600.5 ', '   5.10 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Dois Irmãos', '4306403', '  27 572 ', '  27 276 ', '  27 276 ', '   98.9 ', '   98.9 ', '   65.2 ', '   423.17 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Dois Irmãos das Missões', '4306429', '  2 157 ', '  1 094 ', '  1 094 ', '   50.7 ', '   50.7 ', '   225.7 ', '   9.56 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Dois Lajeados', '4306452', '  3 278 ', '  1 564 ', '  1 564 ', '   47.7 ', '   47.7 ', '   133.4 ', '   24.58 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Dom Feliciano', '4306502', '  14 380 ', '  3 334 ', '  3 334 ', '   23.2 ', '   23.2 ', '  1 356.2 ', '   10.60 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Dom Pedrito', '4306601', '  38 898 ', '  35 255 ', '  34 974 ', '   90.6 ', '   89.9 ', '  5 192.1 ', '   7.49 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Dom Pedro de Alcântara', '4306551', '  2 550 ', '   741 ', '   455 ', '   29.1 ', '   17.8 ', '   78.2 ', '   32.63 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Dona Francisca', '4306700', '  3 401 ', '  2 146 ', '  2 146 ', '   63.1 ', '   63.1 ', '   114.3 ', '   29.74 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Doutor Maurício Cardoso', '4306734', '  5 313 ', '  2 619 ', '  2 280 ', '   49.3 ', '   42.9 ', '   252.7 ', '   21.03 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Doutor Ricardo', '4306759', '  2 030 ', '   693 ', '   693 ', '   34.1 ', '   34.1 ', '   108.4 ', '   18.72 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Eldorado do Sul', '4306767', '  34 343 ', '  30 800 ', '  26 287 ', '   89.7 ', '   76.5 ', '   509.7 ', '   67.38 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Encantado', '4306809', '  20 510 ', '  17 879 ', '  17 783 ', '   87.2 ', '   86.7 ', '   139.2 ', '   147.38 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Encruzilhada do Sul', '4306908', '  24 534 ', '  17 119 ', '  17 024 ', '   69.8 ', '   69.4 ', '  3 348.3 ', '   7.33 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Engenho Velho', '4306924', '  1 527 ', '   599 ', '   599 ', '   39.2 ', '   39.2 ', '   71.2 ', '   21.45 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Entre Rios do Sul', '4306957', '  3 080 ', '  2 130 ', '  2 130 ', '   69.2 ', '   69.2 ', '   120.1 ', '   25.65 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Entre-Ijuís', '4306932', '  8 938 ', '  4 893 ', '  4 893 ', '   54.7 ', '   54.7 ', '   552.6 ', '   16.17 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Erebango', '4306973', '  2 970 ', '  1 958 ', '  1 958 ', '   65.9 ', '   65.9 ', '   153.1 ', '   19.40 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Erechim', '4307005', '  96 087 ', '  90 552 ', '  90 152 ', '   94.2 ', '   93.8 ', '   430.7 ', '   223.11 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Ernestina', '4307054', '  3 088 ', '  1 671 ', '  1 671 ', '   54.1 ', '   54.1 ', '   239.1 ', '   12.91 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Erval Grande', '4307203', '  5 163 ', '  2 690 ', '  2 609 ', '   52.1 ', '   50.5 ', '   285.9 ', '   18.06 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Erval Seco', '4307302', '  7 878 ', '  3 437 ', '  2 741 ', '   43.6 ', '   34.8 ', '   363.9 ', '   21.65 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Esmeralda', '4307401', '  3 168 ', '  2 128 ', '  2 089 ', '   67.2 ', '   65.9 ', '   829.9 ', '   3.82 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Esperança do Sul', '4307450', '  3 272 ', '   844 ', '   717 ', '   25.8 ', '   21.9 ', '   148.4 ', '   22.05 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Espumoso', '4307500', '  15 240 ', '  11 131 ', '  10 884 ', '   73.0 ', '   71.4 ', '   783.1 ', '   19.46 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Estação', '4307559', '  6 011 ', '  5 119 ', '  5 061 ', '   85.2 ', '   84.2 ', '   100.3 ', '   59.95 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Estância Velha', '4307609', '  42 574 ', '  41 484 ', '  41 484 ', '   97.4 ', '   97.4 ', '   52.1 ', '   816.42 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Esteio', '4307708', '  80 755 ', '  80 643 ', '  80 643 ', '   99.9 ', '   99.9 ', '   27.7 ', '  2 917.87 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Estrela', '4307807', '  30 619 ', '  25 913 ', '  25 310 ', '   84.6 ', '   82.7 ', '   184.2 ', '   166.25 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Estrela Velha', '4307815', '  3 628 ', '  1 167 ', '   733 ', '   32.2 ', '   20.2 ', '   281.7 ', '   12.88 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Eugênio de Castro', '4307831', '  2 798 ', '  1 480 ', '  1 480 ', '   52.9 ', '   52.9 ', '   419.3 ', '   6.67 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Fagundes Varela', '4307864', '  2 579 ', '  1 293 ', '  1 293 ', '   50.1 ', '   50.1 ', '   134.3 ', '   19.20 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Farroupilha', '4307906', '  63 635 ', '  55 053 ', '  52 639 ', '   86.5 ', '   82.7 ', '   360.4 ', '   176.57 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Faxinal do Soturno', '4308003', '  6 672 ', '  4 175 ', '  3 984 ', '   62.6 ', '   59.7 ', '   169.9 ', '   39.27 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Faxinalzinho', '4308052', '  2 567 ', '  1 273 ', '  1 273 ', '   49.6 ', '   49.6 ', '   143.4 ', '   17.90 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Fazenda Vilanova', '4308078', '  3 697 ', '  2 013 ', '  2 013 ', '   54.4 ', '   54.4 ', '   84.8 ', '   43.60 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Feliz', '4308102', '  12 359 ', '  9 416 ', '  8 915 ', '   76.2 ', '   72.1 ', '   95.4 ', '   129.59 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Flores da Cunha', '4308201', '  27 126 ', '  20 855 ', '  18 817 ', '   76.9 ', '   69.4 ', '   273.5 ', '   99.20 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Floriano Peixoto', '4308250', '  2 018 ', '   292 ', '   292 ', '   14.5 ', '   14.5 ', '   168.4 ', '   11.98 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Fontoura Xavier', '4308300', '  10 719 ', '  4 100 ', '  3 921 ', '   38.2 ', '   36.6 ', '   583.5 ', '   18.37 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Formigueiro', '4308409', '  7 014 ', '  2 769 ', '  2 769 ', '   39.5 ', '   39.5 ', '   582.0 ', '   12.05 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Forquetinha', '4308433', '  2 479 ', '   468 ', '   468 ', '   18.9 ', '   18.9 ', '   93.6 ', '   26.49 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Fortaleza dos Valos', '4308458', '  4 575 ', '  2 993 ', '  2 670 ', '   65.4 ', '   58.4 ', '   650.3 ', '   7.03 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Frederico Westphalen', '4308508', '  28 843 ', '  23 333 ', '  22 962 ', '   80.9 ', '   79.6 ', '   265.0 ', '   108.85 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Garibaldi', '4308607', '  30 689 ', '  27 211 ', '  26 982 ', '   88.7 ', '   87.9 ', '   169.2 ', '   181.34 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Garruchos', '4308656', '  3 234 ', '  1 057 ', '  1 057 ', '   32.7 ', '   32.7 ', '   799.9 ', '   4.04 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Gaurama', '4308706', '  5 862 ', '  3 388 ', '  3 213 ', '   57.8 ', '   54.8 ', '   204.3 ', '   28.70 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('General Câmara', '4308805', '  8 447 ', '  4 966 ', '  4 345 ', '   58.8 ', '   51.4 ', '   510.0 ', '   16.56 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Gentil', '4308854', '  1 677 ', '   723 ', '   509 ', '   43.1 ', '   30.4 ', '   184.0 ', '   9.11 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Getúlio Vargas', '4308904', '  16 154 ', '  13 862 ', '  13 587 ', '   85.8 ', '   84.1 ', '   286.6 ', '   56.37 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Giruá', '4309001', '  17 075 ', '  12 907 ', '  12 560 ', '   75.6 ', '   73.6 ', '   855.9 ', '   19.95 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Glorinha', '4309050', '  6 891 ', '  2 067 ', '  2 065 ', '   30.0 ', '   30.0 ', '   323.6 ', '   21.29 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Gramado', '4309100', '  32 273 ', '  29 013 ', '  28 749 ', '   89.9 ', '   89.1 ', '   237.8 ', '   135.70 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Gramado dos Loureiros', '4309126', '  2 269 ', '   526 ', '   526 ', '   23.2 ', '   23.2 ', '   131.4 ', '   17.27 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Gramado Xavier', '4309159', '  3 970 ', '   529 ', '   529 ', '   13.3 ', '   13.3 ', '   217.5 ', '   18.25 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Gravataí', '4309209', '  255 660 ', '  243 497 ', '  229 301 ', '   95.2 ', '   89.7 ', '   463.5 ', '   551.58 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Guabiju', '4309258', '  1 598 ', '   738 ', '   738 ', '   46.2 ', '   46.2 ', '   148.4 ', '   10.77 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Guaíba', '4309308', '  95 204 ', '  93 064 ', '  89 202 ', '   97.8 ', '   93.7 ', '   376.9 ', '   252.57 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Guaporé', '4309407', '  22 814 ', '  20 820 ', '  20 614 ', '   91.3 ', '   90.4 ', '   297.7 ', '   76.64 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Guarani das Missões', '4309506', '  8 115 ', '  5 030 ', '  4 948 ', '   62.0 ', '   61.0 ', '   290.5 ', '   27.93 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Harmonia', '4309555', '  4 254 ', '  2 456 ', '  2 456 ', '   57.7 ', '   57.7 ', '   44.8 ', '   95.04 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Herval', '4307104', '  6 753 ', '  4 519 ', '  4 430 ', '   66.9 ', '   65.6 ', '  1 757.8 ', '   3.84 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Herveiras', '4309571', '  2 954 ', '   384 ', '   384 ', '   13.0 ', '   13.0 ', '   118.3 ', '   24.97 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Horizontina', '4309605', '  18 348 ', '  14 569 ', '  14 257 ', '   79.4 ', '   77.7 ', '   232.5 ', '   78.92 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Hulha Negra', '4309654', '  6 043 ', '  2 909 ', '  2 909 ', '   48.1 ', '   48.1 ', '   822.9 ', '   7.34 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Humaitá', '4309704', '  4 919 ', '  2 911 ', '  2 911 ', '   59.2 ', '   59.2 ', '   134.5 ', '   36.57 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Ibarama', '4309753', '  4 371 ', '  1 053 ', '  1 053 ', '   24.1 ', '   24.1 ', '   193.1 ', '   22.63 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Ibiaçá', '4309803', '  4 710 ', '  2 849 ', '  2 718 ', '   60.5 ', '   57.7 ', '   348.8 ', '   13.50 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Ibiraiaras', '4309902', '  7 171 ', '  3 817 ', '  3 679 ', '   53.2 ', '   51.3 ', '   300.7 ', '   23.85 ');
    INSERT INTO public.entidade
    (nom_entidade, cod_entidade, pop_absoluta_total, pop_absoluta_urbana_total, pop_absoluta_urbana_sede, pop_relativa_urbana_total, pop_relativa_urbana_sede, area_total, densidade_demografica)
    VALUES('Ibirapuitã', '4309951', '  4 061 ', '  2 391 ', '  2 391 ', '   58.9 ', '   58.9 ', '   307.0 ', '   13.23 ');
    `)
  }
}
