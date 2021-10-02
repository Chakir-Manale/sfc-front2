import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import Accordion from '../../features/accordion/accordion';
import Card from '../../features/accordion/card';

import {isIEBrowser} from '../../../utils';

function FAQ() {
    return (
        <div className="main">
            <Helmet>
                <title>SFC - CGU</title>
            </Helmet>

            <h1 className="d-none">SFC - CGU</h1>

            <PageHeader title="C.G.U" subTitle="Pages"/>
            <Breadcrumb title="CGU" parent1={["Pages", "pages/about"]}/>

            <div className="page-content">
                <div className="container">
                    <h2 className="title text-center mb-3">CONDITIONS GÉNÉRALES D'UTILISATION ET DE VENTE EN LIGNE </h2>

                    <Accordion adClass="accordion-rounded">
                        <Card title="CHAMP D'APPLICATION" adClass="card-box card-sm bg-light">
                            <ul style={{"listStyle": "auto"}}>
                                <li>
                                    Les présentes conditions générales ("CGV") régissent toutes les ventes de produits
                                    (les Produits) proposées sur le site www.naturalflow.ma par la société NATURALFLOW
                                    SARL.
                                    (le Vendeur ) à un client (le Client) et dans le monde entier.
                                </li>
                                <li>
                                    Le fait de passer une commande de produits implique l'adhésion entière et sans
                                    réserve
                                    du client à ces CGV.
                                    Conformément à la loi, ces CGV constituent le fondement de la négociation
                                    commerciale et
                                    prévalent par conséquent sur toutes dispositions contradictoires pouvant découler du
                                    client.
                                </li>
                            </ul>
                        </Card>

                        <Card title="DÉFINITIONS" adClass="card-box card-sm bg-light">
                            <div>
                                <strong>Client: </strong>
                                <p>
                                    Toute personne physique ou morale achetant des Produits auprès du Vendeur.
                                </p>
                            </div>

                            <div>
                                <strong> Commande: </strong>
                                <p>
                                    Action pour que le client accepte ces conditions en cochant la case "J'ai lu et
                                    j'accepte les conditions générales de vente", sélectionnez un produit sur la page de
                                    commande et validez le processus de commande jusqu'au paiement, selon les conditions
                                    énoncées à l'article 3.
                                </p>
                            </div>
                            <div>
                                <strong> Contrat: </strong>
                                <p>
                                    ensemble de documents comprenant la commande du client, les présentes CGV et tout
                                    accord spécifique potentiel pouvant être convenu par les parties.
                                </p>
                            </div>
                            <div>
                                <strong>Droits de propriété intellectuelle : </strong>
                                <p>
                                    toute information appartenant au Vendeur ou à une
                                    autre personne et notamment les brevets, marques, dessins et modèles, enregistrés ou
                                    non,
                                    les logos, noms commerciaux, secrets commerciaux, droits d'auteur, inventions,
                                    méthodes et
                                    savoirs originaux. comment, bases de données, informations techniques, commerciales
                                    ou
                                    financières ou tout autre droit de propriété intellectuelle faisant l’objet d’une
                                    protection
                                    dans un ou plusieurs pays.
                                </p>
                            </div>
                            <div>
                                <strong>Partie: </strong>
                                <p>
                                    le client, d’une part, et le vendeur, d’autre part, désignés conjointement par les
                                    "parties".
                                </p>
                            </div>
                            <div>
                                <strong> Produits: </strong>
                                <p>
                                    les produits fournis et commercialisés par le vendeur, tels que présentés sur le
                                    site Web, y compris les cahiers de tendances et / ou les CD-ROM.
                                </p>
                            </div>
                            <div>
                                <strong> Site Web: </strong>
                                <p>
                                    le site Web www.naturalflow.ma.
                                </p>
                            </div>
                            <div>
                                <strong> Vendeur: </strong>
                                <p>
                                    la société NATURALFLOW, spécialisée dans la conception, la fabrication et la
                                    commercialisation des Produits décrits ci-dessus.
                                </p>
                            </div>
                        </Card>

                        <Card title="COMMANDES" adClass="card-box card-sm bg-light">
                            <ul style={{"listStyle": "auto"}}>
                                <li>
                                    La commande est passée au vendeur par le client en sélectionnant un ou plusieurs
                                    produits que, conformément à la sélection, le client place dans son "panier".
                                </li>
                                <li>
                                    Avant de valider la Commande, le Client acceptera expressément ces CGV en cochant la
                                    case "J'ai lu et j'accepte les conditions générales de vente".
                                </li>
                                <li>
                                    La commande n'est validée qu'une fois que le client a fourni les informations
                                    nécessaires au bon déroulement de sa commande et les a payées.
                                    Cette information est la suivante:
                                    Nom du client, adresse de facturation, adresse électronique, numéro de téléphone
                                    Adresse de livraison et numéro de téléphone du destinataire.
                                </li>
                                <li>
                                    Le client garantit l'exactitude de toutes ces informations. Si tout ou partie des
                                    adresses de livraison s'avéraient incorrectes, obligeant ainsi le Vendeur à renvoyer
                                    les
                                    commandes à son entrepôt, le Client en supportera les conséquences et le Vendeur
                                    sera en
                                    droit de facturer des frais administratifs et de transport pour le retour des
                                    Commandes.
                                </li>
                                <li>
                                    La commande du client sera systématiquement confirmée par courrier électronique, à
                                    l'adresse indiquée par le client lors de la passation de la commande. Ce courrier
                                    électronique de confirmation comprendra notamment une facture au nom du client,
                                    résumant
                                    les caractéristiques d'identification de la commande.
                                </li>
                                <li>
                                    Afin de suivre la commande, le client peut contacter le service clientèle du vendeur
                                    à l'adresse électronique suivante: info@naturalflow.ma
                                </li>
                                <li>
                                    Le vendeur se réserve le droit de refuser une commande d'un client avec lequel il
                                    existerait un litige quant à l'exécution ou au paiement d'une commande précédente ou
                                    lorsque le client ne se serait pas conformé à ces CGV.
                                </li>
                            </ul>
                        </Card>

                        <Card title="DISPONIBILITÉ DU PRODUIT" adClass="card-box card-sm bg-light">
                            <ul style={{"listStyle": "auto"}}>
                                <li>
                                    <p>
                                        La commande est passée dans la limite des stocks disponibles du Vendeur. En cas
                                        de rupture de stock, le Vendeur informera le Client, par courrier électronique,
                                        du délai supplémentaire lié à une nouvelle production, à une livraison partielle
                                        ou à l'annulation de la Commande.

                                    </p>
                                    <p>
                                        À la réception de ces informations, le client pourra se faire rembourser le prix
                                        du produit commandé non disponible dans les trente (30) jours suivant sa
                                        réclamation.
                                    </p>
                                </li>
                                <li>
                                    En cas de rupture de stock, le Vendeur ne pourra être tenu pour responsable de
                                    l'impossibilité matérielle d'honorer la Commande. Le cas échéant, le Vendeur
                                    s’engage à rembourser au Client les frais correspondant à l’annulation partielle ou
                                    totale de la Commande, proportionnellement à la partie annulée de la Commande, frais
                                    de ports correspondants compris. Il en va de même pour tout frais de livraison
                                    supplémentaire dû à cette annulation.
                                </li>
                            </ul>
                        </Card>

                        <Card title="LIVRAISON" adClass="card-box card-sm bg-light">
                            <ul style={{"listStyle": "auto"}}>
                                <li>
                                    Les produits sont livrés DDP au Maroc à l'adresse de livraison indiquée lors de la
                                    commande. Afin d'optimiser la livraison, il est conseillé de fournir une adresse à
                                    laquelle la Commande pourra être livrée pendant les heures ouvrables.
                                </li>
                                <li>
                                    Les délais de livraison indiqués sont des délais moyens, fournis à titre
                                    indicatif, et peuvent varier en fonction de la destination.
                                </li>
                                <li>
                                    Le délai de livraison pour le Maroc est de 48 heures et cinq (5) jours ouvrables
                                    pour les livraisons à l'étranger.
                                </li>
                                <li>
                                    En vertu de son contrat de vente, le service des ventes en ligne du Vendeur est
                                    entièrement responsable de la livraison et de l’expédition, les frais encourus
                                    faisant partie intégrante de ces transactions. En cas de litige lors de la
                                    livraison, toute réclamation doit être adressée dans les 48 heures au service de
                                    vente en ligne d’NATURALFLOW  à l'adresse contact@naturalflow.ma, en plus des réservations
                                    éventuelles faites au transporteur dans les conditions légales.

                                </li>
                                <li></li>
                            </ul>
                        </Card>

                        <Card title="PRIX" adClass="card-box card-sm bg-light">
                            <ul style={{"listStyle": "auto"}}>
                                <li>
                                    Les prix sont indiqués sur le site web en MAD, toutes taxes comprises en vigueur au
                                    Maroc, les frais de traitement et de livraison.
                                </li>
                                <li>
                                    Les prix indiqués peuvent être modifiés à tout moment sans préavis. Toutefois, les
                                    Produits seront facturés au taux en vigueur au moment de la validation de la
                                    Commande.
                                </li>
                            </ul>
                        </Card>

                        <Card title="PAIEMENT" adClass="card-box card-sm bg-light">
                            <ul style={{"listStyle": "auto"}}>
                                <li>
                                    Pour payer votre commande, vous choisissez le mode de paiement parmi ceux proposés
                                    par www.naturalflow.ma sur la page de paiement.
                                    Dans ce cas, le transfert de la transaction pour le débit de votre compte est
                                    effectué dans un délai d'un jour à compter de la date de la confirmation de
                                    livraison.
                                </li>
                                <li>
                                    Le consommateur garantit à la société NATURALFLOW qu'elle dispose des autorisations
                                    nécessaires pour utiliser le mode de paiement choisi par lui, lors de la validation
                                    du bon de commande
                                </li>
                                <li>
                                    En cas de paiement par carte de crédit, le client garantit qu'il dispose des droits
                                    nécessaires pour utiliser sa carte de paiement et qu'il est pleinement autorisé à
                                    l'utiliser pour payer la commande. Il garantit également que cette carte donne accès
                                    à des fonds suffisants correspondant au montant de la commande. A défaut, le Vendeur
                                    se réserve le droit d'annuler la vente selon les conditions énoncées à l'article 11.
                                </li>
                                <li>
                                    Pour sa part, le Vendeur utilise un mode de paiement sécurisé. En conséquence, sa
                                    responsabilité ne saurait être engagée en cas d'utilisation frauduleuse ou abusive
                                    des moyens de paiement du Client, sur laquelle il n'a aucun contrôle.
                                </li>
                                <li>
                                    Les dispositions relatives à l'utilisation frauduleuse des moyens de paiement
                                    prévues dans les contrats conclus entre le consommateur et l'émetteur de la carte,
                                    entre la société NATURALFLOW et son établissement bancaire sont applicables.
                                </li>
                            </ul>
                        </Card>

                        <Card title="Garantie"
                              adClass="card-box card-sm bg-light">
                            <p>
                                Tous les produits vendus dans le catalogue sont garantis contre les défauts de
                                fabrication et les défauts de matériaux. La durée de cette garantie est d’au moins un an
                                (à compter de la date de facturation). En cas de retour de matériel prouvant qu'il n'est
                                pas défectueux, des frais de transport et de manutention peuvent être facturés au
                                client. Cette garantie ne couvre pas les dommages résultant d'accidents, de mauvaise
                                utilisation ou de négligence.
                            </p>
                        </Card>

                        <Card title="CONFORMITÉ DES PRODUITS"
                              adClass="card-box card-sm bg-light">
                            <ul style={{"listStyle": "auto"}}>
                                <li>
                                    À chaque livraison de Produits, le Client doit immédiatement vérifier que la
                                    livraison reçue est conforme à la Commande passée. Ce contrôle est effectué selon
                                    des critères qui, sauf convention contraire écrite, sont les suivants: respect du
                                    lieu et du mode de livraison, respect du type et de la quantité de Produits livrés
                                    par rapport à la quantité acceptée et reconnue par le transporteur lorsque le
                                    chargement et l'état des boîtes d'emballage.
                                </li>

                                <li>
                                    Si nécessaire, le client doit faire ses réservations claires et précises sur le
                                    bordereau du transporteur. Simultanément, le client doit également envoyer une copie
                                    de la lettre au vendeur par lettre recommandée avec accusé de réception.
                                </li>

                                <li>
                                    Si le produit livré au client ne respecte pas la commande, le client peut le
                                    renvoyer au vendeur.
                                </li>

                                <li>
                                    Si le non-respect est prouvé et confirmé par le vendeur, le client peut demander au
                                    vendeur:
                                    <p>
                                        - soit de faire livrer un produit conforme à celui commandé (à condition qu'il
                                        soit en stock);
                                    </p>
                                    <p>
                                        - ou de faire livrer un produit de qualité et de valeur équivalentes (à
                                        condition qu'il soit en stock);
                                    </p>
                                    <p>
                                        - soit être remboursé du prix du Produit dans les trente (30) jours de sa
                                        réclamation.
                                    </p>
                                </li>

                                <li>
                                    En cas de non-conformité avérée, les frais de retour du Produit commandé et livré au
                                    Client, ainsi que de toute livraison d'un autre Produit, sont à la charge du
                                    Vendeur.
                                </li>
                            </ul>
                        </Card>

                        <Card title="DROIT DE RÉTRACTATION"
                              adClass="card-box card-sm bg-light">
                            <p>
                                A partir de la date de livraison de votre commande, vous disposez d'un délai de 7 jours
                                pour faire valoir votre droit de rétractation et être intégralement remboursé. Les frais
                                de retour de la marchandise restent à votre charge. Toutefois, seuls les produits
                                retournés en parfait état de revente, complets et dans leur emballage d'origine (non
                                ouverts) peuvent être remboursés.
                            </p>
                        </Card>

                        <Card title="RÉSERVE DE PROPRIÉTÉ"
                              adClass="card-box card-sm bg-light">
                            <ul style={{"listStyle": "auto"}}>
                                <li>Le Vendeur reste pleinement propriétaire des Produits jusqu'au paiement complet par
                                    le Client du prix et des frais accessoires et la perception effective par le Vendeur
                                    des sommes dues au titre du Contrat. Jusqu'à ce qu'ils soient payés en totalité, ils
                                    resteront sous la garde du Client qui en assumera les risques.
                                </li>
                                <li>La mise en œuvre de la présente clause de réserve de propriété ne peut avoir aucune
                                    incidence sur le transfert des risques au client qui intervient à la réception des
                                    produits par ce dernier.
                                </li>
                            </ul>
                        </Card>

                        <Card title="UTILISATION DU SITE WEB ET RENSEIGNEMENTS PERSONNELS"
                              adClass="card-box card-sm bg-light">
                            <ul style={{"listStyle": "auto"}}>
                                <li>
                                    L'utilisation du site Web ne confère aucun droit. Tous les droits utilisés ou
                                    représentés sur le site Web restent la propriété exclusive du vendeur et ne peuvent
                                    être reproduits, diffusés, vendus, commercialisés ou utilisés à des fins autres que
                                    personnelles par les utilisateurs, clients ou non, sans l'accord préalable et écrit
                                    du vendeur.
                                </li>
                                <li>
                                    L'accès au site Web est fourni «tel quel», accessible en fonction de sa
                                    disponibilité et sans aucune garantie du vendeur. Il doit être utilisé aux risques
                                    de l'utilisateur. Le vendeur ne garantit pas que (i) le site Web, le contenu et les
                                    produits proposés répondent pleinement aux attentes de l'utilisateur, (ii) le site
                                    Web est ininterrompu et exempt de toute erreur, ou que (iii) le site Web ne contient
                                    aucun virus. .
                                </li>
                                <li>
                                    Des registres informatisés sont conservés dans les systèmes informatiques du vendeur
                                    dans des conditions de sécurité raisonnables, comme preuve des communications,
                                    commandes et paiements effectués par le client. Les bons de commande et les factures
                                    sont classés sur un support fiable et durable. Le Vendeur prend toutes les mesures
                                    pour assurer la confidentialité des échanges et des transactions sur Internet.
                                </li>
                                <li>
                                    Le client dispose d'un droit d'accès, de modification, de modification et de
                                    suppression de ses données personnelles. Plus précisément, lorsque la commande est
                                    passée et que le client fournit ses données personnelles, il lui est demandé de
                                    donner son autorisation,
                                    (i) s’il souhaite recevoir des informations sur les Produits du Vendeur et le
                                    bulletin d’information,
                                    (ii) s'il accepte que ses données soient partagées avec les partenaires du vendeur;
                                    et
                                    (iii) aux fins du paiement sécurisé garanti sur le site Web.
                                </li>
                                <li>
                                    À défaut d'un accord exprès du Client en cliquant sur chacun de ces éléments, le
                                    Vendeur s'engage à ne pas en faire un tel usage.
                                </li>
                            </ul>

                        </Card>

                        <Card title="RESPONSABILITÉ"
                              adClass="card-box card-sm bg-light">
                            <ul style={{"listStyle": "auto"}}>
                                <li>Le service des ventes en ligne du vendeur décline toute responsabilité si le produit
                                    livré n'est pas conforme à la législation du pays de livraison (censure,
                                    interdiction d'un titre ou d'un auteur ...).
                                </li>
                                <li>Le Vendeur ne peut en aucun cas être tenu responsable des dommages indirects ou
                                    imprévisibles qui comprennent notamment les dommages financiers et commerciaux, tels
                                    que la perte d'activité, la perte d'exploitation ou le manque à gagner, perte de
                                    revenus, perte de contrats ou de commandes, ou encore perte de clients.
                                </li>
                                <li>En tout état de cause, le montant de la responsabilité du Vendeur au paiement d’une
                                    indemnité pour les seuls cas de dommages directs est limité au montant total des
                                    Commandes effectivement payées par le Client.
                                </li>
                                <li>Le vendeur n'est pas non plus responsable du contenu des sites Web sur lesquels des
                                    liens hypertextes peuvent être redirigés hors de son propre site Web.
                                </li>
                            </ul>
                        </Card>

                        <Card title="FORCE MAJEURE"
                              adClass="card-box card-sm bg-light">
                            <ul style={{"listStyle": "auto"}}>
                                <li>Le Vendeur ne peut être tenu pour responsable du non-respect de l’un de ses
                                    engagements vis-à-vis du Client si ce manquement est dû à un cas de force majeure
                                    tel que guerre, grève (interne ou chez l’un de ses prestataires), sortie, accident,
                                    incendie, neige, inondation, intempéries, interruption ou suspension des moyens de
                                    communication et / ou de transport, blocage, blocage des exportations, importation
                                    ou exportation prohibée, cessation de la production ou du transport, décision
                                    réglementaire d'un organisme de contrôle administratif, etc.
                                </li>
                                <li>Dans cette situation, le vendeur informera le client de cette impossibilité et des
                                    mesures prises pour y remédier.
                                </li>
                            </ul>
                        </Card>
                        <Card title="DROITS DE PROPRIÉTÉ INTELLECTUELLE"
                              adClass="card-box card-sm bg-light">
                            <ul style={{"listStyle": "auto"}}>
                                <li>Les produits contiennent des éléments graphiques, visuels et textuels ainsi que des
                                    illustrations (les "droits de propriété intellectuelle"), tous protégés par des
                                    droits d'auteur, des droits sur l'image, des droits sur des modèles ou des droits de
                                    marque, dont les titulaires ou les propriétaires sont soit le vendeur, soit des
                                    tiers.
                                </li>
                                <li>Dans la mesure du possible, le vendeur identifie les auteurs et / ou les titulaires
                                    de ces droits de propriété intellectuelle dans la bibliographie du produit. Si une
                                    personne ou une entité reconnaît l'un de ces éléments sur lequel elle peut exercer
                                    des droits et qui n'est pas complètement identifiée ou non identifiée, le Vendeur
                                    reste disponible pour recevoir une telle réclamation.
                                </li>
                                <li>L'omission de mentionner le titulaire ou l'auteur ne peut en aucun cas être
                                    considérée comme rendant les droits de propriété intellectuelle exempts
                                    d'exploitation. Les droits d'utilisation, de représentation et de reproduction des
                                    produits continuent à être détenus par le vendeur ou par les titulaires des droits
                                    indiqués.
                                </li>
                                <li>Toute reproduction, copie, imitation, publication, communication, commercialisation
                                    ou utilisation à des fins commerciales d'un ou plusieurs des droits de propriété
                                    intellectuelle, sur quelque support que ce soit, partiellement ou totalement, ne
                                    peut être réalisée sans l'autorisation écrite préalable de détenteurs de droits.
                                </li>

                            </ul>
                        </Card>
                        <Card title="DROIT DES LITIGES / APPLICABLE"
                              adClass="card-box card-sm bg-light">
                            <ul style={{"listStyle": "auto"}}>
                                <li>Ces CGV, en plus de tout contrat conclu en vertu des CGV, sont soumis à la loi
                                    marocaine. Les informations contractuelles sont présentées en langue française et
                                    les produits proposés à la vente sont conformes à la législation marocaine.
                                </li>
                                <li>Le tribunal de commerce de Casablanca est seul compétent pour tout litige relatif au
                                    contrat et / ou à l'application de ces CGV.
                                </li>
                            </ul>
                        </Card>
                    </Accordion>
                </div>
            </div>

            <div className="cta cta-display bg-image pt-4 pb-4"
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/cta/bg-7.jpg)`}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9 col-xl-7">
                            <div
                                className={`row no-gutters ${isIEBrowser() ? '' : 'flex-column'} flex-sm-row align-items-sm-center`}>
                                <div className="col">
                                    <h3 className="cta-title text-white">Si vous avez d'autres questions</h3>
                                    <p className="cta-desc text-white">Vous pouvez nous contacter!</p>
                                </div>

                                <div className="col-auto">
                                    <Link to={`${process.env.PUBLIC_URL}/pages/contact`}
                                          className="btn btn-outline-white"><span>CONTACTER NOUS</span>
                                        <i className="icon-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(FAQ);