This is a **real time application** , demonstrate you that how **two way (bidirectional) communication** happened using **websocket** technology, as http protocol can handle only single way (single TCP connection) communication.

#### This project is divided in to 3 parts/projects to understand
(1) Frontend.
(2) Messaging.
(3) Webservice.

#### What each project contains?

(1) **Frontend** is part where all UI related things are there.

	Technology used in: - Angular5, Socket-Client.

(2) **Messaging** act as an intermediate between Frontend and Webservice.

	Technology used in: - Node.Js, Express.Js, and Socket.io

(3) **Webservice** , Is simple REST APIs.

	 Technology used in: - PHP, MySQL and Apache2.

 ![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAAEaCAYAAACRq4KfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABgkSURBVHhe7Z2LcxVVnsf3X7N2fULeiKi7Mzpj1dSy5ZaiqEhAHkmIIBWEMbLARCAkRAgQSDAhiPKQh8gjhcERrFXcHScLsywsUCxg8Gx/D31SJ8dzc3MTbvr8zv1+qr6V3O6+fbv7nE+ffvffKUJIJlA+QjKC8hGSEZSPkIygfIRkBOUjJCMoHyEZQfkIyQjKR0hGUD5CMoLyEZIRlI+QjKB8hGQE5SMkIyifxZVrt9S2g4PqrfX7VdXCdvXIqxuYDFJe26bmruvXZTF09WZaOvFB+VJ6TlxQ0+e3qfKGPlW98oia1XxWPb/+PJNBsOxRBiiLafNaVeehwbSU4oLyJdS2HFDlizqTQj/jrQxMdkGZoGzmNPelpRUPJS8fWjwUrq/gmXBSvbRL7Tx8Pi21OChp+bCPh01NtnjhB5uiZcm+YEz7gCUtH3bosV/hK2wmvFQ29qtN+86mpSefkpYPRzWxY+8raCa81DR9oV5bG8++X0nLh9MJPKopJ7M+HFAVC9rS0pNPScuHc0q+QmbCDcosFiifp4CZcEP5IoHyyQvliwTKJy+ULxIon7xQvkigfPJC+SKB8skL5YsEyicvlC8SKJ+8UL5IoHwPN/3nr+rluqT7B2//hxHKFwnFku/mneH0F0ZTzEoZQihfYVA+TwFPNpDvu8u3vf2mKkPX7+r4+hUrlK8wKJ+ngCcbykf5xgPl8xTwZJNPPkiB/gjA8Kaf6WZwBbIruA26o7/b3WAL4WL323xsaKSbzelLN0aGMcG0GTAPlK8wKJ+ngCeb8cgH3GFMd7sbxmXLaSo4MN0gBrArPcblimuEMqIi7neNfMB0M7+JfuZ7ZiVhPtvTRfnGB+XzFPBkA1lcbIEghf0ZMZXeruC+7r7WxSeVTz4I43ZDgGnZck0HsFs/9zPim7aHHcoXCVm2fK4EuSquK1au4YAtg+838DkX+eSz5ynXMJSvMCifp4Anm5Dlc7u5oXxTB+XzFPBkMxH5clVot/t45cPvu7+Bbpg2u5ubXNNhz5O7QjDB7wPKNz4on6eAJ5uJyIfge64cwB62EPmAPYwRy502/KYZ33jkQzBNwHw20wUo3/igfJ4CnmwmKp/pZ+OOZ7zymW4G0w3fc7FFG698ppsB022+S/nGB+XzFDATbihfJFA+eaF8kUD55IXyRQLlkxfKFwmUT14oXyRQPnmhfJFA+eSF8kUC5ZMXyhcJlE9eKF8klNfirbR8RZiUPLt2QJdZLJS0fHPX9fPlmIJS03SUL8eMBbwWuqyer4WWkiq+Fjoe8HL96fO56Skh2OREWf14+VpaevIpaflA56FBVbWky1vgTDiprtutth44l5ZaHJS8fGBOc58WkC1geEGLB/FeXt2jhu/fT0ssDihfClpAbNZUJvsVNU1f6Jfv+yoDU/xAOBxcwT4eygQtXmziAcpngX1A7NDjiFrFgjZ9TomZ+uB0AsoAZRHTPp4L5SMkIyhfJFy5cS/9j0iB8kXAveFf1CsdF9X12z+nXYgEKF8E9H794BF+rccfPMCIyIDyCQet3uwtF7R8L7R8w9ZPEJRPOKbVM2HrJwfKJxi71TNh6ycHyieYn67dUTtOX9GBeOZ/PNyWhA/liwTIR2RB+SKB8smD8kUC5ZMH5YsEyicPyhcJlE8elC8SKJ88KF8kUD55UL5IoHzyoHyRQPnkQfkigfLJg/JFAuWTB+WLBMonD8oXCZRPHpQvEiifPChfJFA+eVC+SKB88qB8kUD55EH5IoHyyYPyRQLlkwfliwTKJw/KFwmUTx6ULxIonzwoXyRQPnlQvkigfPKgfJFA+eRB+SKB8smD8kUC5ZMH5YsEyicPyhcJlE8elC8SKJ88KF8kUD55UL5IoHzyoHyRQPnkQfkigfLJg/JFAuWTB+UTDN/JLhvKJ5h7w7+o2VsuaPFMXmj5Rl2//XM6BAkZyiec3q+vjpKv9fhQ2oeEDuUTjt36sdWTBeWLANP6sdWTBeWLALR+r3RcZKsnDMoXCVdu3Ev/I1KgfIRkBOULhCvXbqnzly6rgwPfq96TF9WuI+fVxr7TasPeU+qD3SfV4k2f69S2HFD/snqv+kPTHp1n6ztV1cJ2nfLaNvXIqxtGgs+mH4Yz38H3a1s+Gxnn6l1f6t/B7+F38fuYDkwPposUB8o3BQxdvanOff9f6sCZf1cff3ZOrdp5XL21fr/63YouVbnggTBPvrVZlS/8WFUu3aWmLdqtpi3pVuUNfSOpeu/gSGqajqoZq47rPL36pJrVfCbN2VGnHfDZ9Ju55uTId/B9e3z270xf2qN/v6put6p4Z7ua9vaWEZF/++4uNXddv1q5/aieD8wP5gvzN3z/fjq3ZLxQvofE93/9H91atPSeUq+v3adeXL5LVaRiTZvfpiqTilyNCl2/V1Uu26+qVx5KxDmhxXh+/eAoaUIMphPTi+nG9JfX7dWCVi3qVNOT+cN8Tn+7Vf22caee/3U9X+nlgeVCMf1QvgK5feeeOvvdX1XHgXN6E/D5hk712BsbVcXCDlWTVMbKZfuSCnrYEstfmWMMWtoHgh7Wrahe2STLBcvnuWSzF6391mS5nbrwk7p5+266REsXyjcGWGN/95f/1vtBi1sPqWeWblOPzt2oqpbsUBWoXEklm7nmq6Tihd9yZZtBvZywvPRySzatH39zk3qmbpua/6cDevl++x9/U3d/Hk6XfGlA+RwgG1o1HJTAGrusdquqWLpHVS3/TO83+SsXM5FAyMpkuVbU9aiyBR3q0dc/Uv+8qltt2T+gZYydkpfv+q3/00f33t7wqZo+rzXZf9ma7M/06H2bWR8OeCsNU5w8u/ZcstyPqLKl3bocnnhzo95U7Tn+bZRHXUtSPhTk9oOD6qX3uvRRxqq6bn3Uzz1ayGQbrPywEqyq70lE3Kx+v6JL7zP+5W//m5akbEpGPgi3ad9Z9ZvGnYlwrbpAZ6w6lhQy99dkZFCfJsHR4qfe3qKeb9ihyxOnOaQStXw4YILD3a829+k1Z2X9J/po3K8LlpEWlCNERLnOfr9Hn3OUdsAmSvmwWbKm64Qqe7tVVS7u1Jsuz6372luIjOygXHEUtXLxTvVUss/+3rajYjZLo5IPJ3QXbfxM78dVLOtTz3xwyltgTJzBeVWU+xNJ+eNADY5ch0wU8mEh46oKvS/XuF8fNfMVDlMaQWtYtfyAvrIIuxy4KCJERMuHgyjzWz5VZbXt+nwRNy2Z0RnUR7FRP95Yty+4zVGR8mHHuqX3jHoy2dmuauyndEyeDKrqd/erack+4druk/oSwRAQJx+uote3ydR187wcU1Bw3hCnmCpq29SXf/7PtEZlhxj5cNoA95zhFpcH5+f8C5hh8gWnKVCP/tj1ZaZ3XIiQD/t2uOavYtEOXvLFPJQ8u3ZA3zv54vKdmZ2oD16+Hy9fU+XztyT7dvuShcarUZiHm+rlB1RlshuDejbVBC0fFghuSMVhY9+CY5iHkRlNR1RZshmK4wlTSbDy4YQ5Hl2Aqxd8C4xhHmZQz558c9OU3soUpHw4lfBc/XZ97s63oBimGMFliDXvtE/ZqYgg5cP1eVV1e7wLiGGKmeqGHrVk0+dpTSwuwcmHS4HwQB5eIpZtlnT/oMvj9KUb3v6x5rl/O6fKF3SoY+d/1PNfTIKTb05zn5jNzf7zV9OpVmrzsSHvMIj9vjxf/xBTqvIhuJt+9vvdev6LSVDy4XwLbguRcrmYke/mnWE1dP2udxjEDAN8/ZnQMqjKatv0Qb9iEpR8uF6zclmfZ2GEGSMfWgeA1sIdxvQzf93+TJipbuzXV8AUk6Dkw9OQ0eT7FkaIMfKZTTRsXrrDoMWDeLnkMy2iwd18tTdZMex4+2E8Nm5/BK21D7MSAZhuM7yZl7F+F7H724y1aR5acAkjbkcqJkHJN6tuu6gbYG35fHLl6w/sym2GN5XU/Q76m+HH6ofvu1Lgs71ywP/2MO74EGDGiWB4txuwx+ubLuDbKgg5z3xwWs1cvE1Pe7EISr5/eK1F1O1BdsVCALqZ/mhZTMV0KyU++1oNWxL3O3bG6ucLxmnvl+J3MA7z2Uy/3ToBexh72kzw2Z4Pe55NgL1cpOTv57ToaS8WbPkmEXetjopnKqJbmV1ZUEFzYVdegy3OePqZabOxJXGl8ckM8snnfs/97C4jKUHLN2NRh572YhGUfK+txSPYZe7z2Z8hXL7K7fYfK0ZkYMuQq5/5LbsVc38Pn11cQYD9e4XIZ2NPh5Rgn+/lNXvTOSgOQcm3fu9X6d0L/gUSWnxrdVNBAfqb7rkqqfk8nowlrN0P/7utoftdkE8KUKh8GMaeb6nB0c5Vncf0vBWLoOTDMzbwECQptw755LPX/PawbiU1LZYrCT4bKez/EVRsM/xY/cxvmeky02nLh/99mP4IKFQ+TIMPt1UNPeULthb9Iuug5AP/mjT1uMDVt0BCi08+I1W+SmriYrcaZlwGW56x+iG2BOiH37eHQX9bLMTXOhYqH/qPd95DTU3TF+qlFV16motJcPLh2RrT57fra+x8C4aZfHwrDbu73a2QoCUG7uas6e7+XpgZVBXvfKyfgF1sgpMPLGs/rB904184zGRjZLBbWQQtm9l0nUhMa+y2qBin3aKGnJplvWrehn49H8UmSPlwP9XMxR1iNj8lxrRyNu7m4kRixLaZjNBTGbyrvvqddv3auKkgSPkAdnZxZzHvZGemIniiGd7POJWPkghWPoAF8dRbmykgU9SgfqGe8RkuDvrpZXiWCx+ixBQh1e8dVE8kW1hTLR4IXj6A83+/adyhKpZ08Q535qEER9Nr6rvVPzZ0Fv2+vVyIkA/gycK44gBPGn569UnvAmWY8WTmmpP65SnvdhzO9L0NYuQz4NkaeNZ+ZX0PW0GmoKC+VDf2qmnzNk/Jebx8iJMP3Lx9V795Fi/BrF6B573wSdbM2Kle8bmaPn+Lbu1Qf0JApHwGHIx55YNPVNkCnBPEEVFKyIwO7pIpX/ixfiBSVvt2uRAtn+HUhZ/0i1RwWRpaQr6vr9Tz4KWYeATgS+91qSPnLqU1JSyikM+Aw8V4AymegIZbQvhGo9IK3jyEl2DizpiX1/QE+zpoQ1TyGfCO9sath/X5m5r6Ln2VOjdJ4w0uC6up262viKpr/VyXvwSilM+Aw8i9Jy/qTQ+coqh5t18fZvYVICMreMwDyhPP13xx+S615+ifgzmQMl6ils8GB2fW9Xylnl7coW+UnLF8H88XCgtWnHjSAcqvckGben/HMTGtnI+Skc8GBdbSe0r907IdukWsbvhEHxXjecOwoq9CwZ0Gjb2qvLZdzVq6Ta9AJQtnU5Ly2eDStc5Dg/qUBfYZqhZ16rUrCp039E5tcJR6xqrj+qnlKIfH5m7UTzZo/3RAl1NslLx8NriEDUfI0Cr+bkWXeuyNjUkl2K4qdct4WM1qPuutNMzEguWJ5VpRv1dVvrNdPfr6R3q5f7jnpC4HvKcxZijfGGAHHucQseZ9fe0+fVkbXl82o2GPflU1WkeezhhfsJywvLDcsPywuT9tXqt6LVmurf1n9eNDpB0wmSyUr0CuXLulT9pi3wMVB3c+P560kNWLO9WMZcka/N1PdSXDw39LbbMV84v5xvxjOVQ17NXLBcunamG7fvfBH7tOqIMD3+vlWOpQvocATmngznsc7sadF3jYKp52jMffo+JVLOxQNUt3qer6HlXe8OD9g6igM9d8JeYgD6YTYuFhsvrqkWQ+ahK5MF+Yv8eT/WXML+Z79vs9auW2o3p5nL90ueRatPFC+YoMngeCawqxWdVz/Fu1se+0Wrzpc32tIV7EATkfnfuRvhSqZukOfY8ZKrZJxbJ+XdlNcMEADkqYzGo+MxJc4TFamIFR/e3vYTz2eCuX7R/1u5iO6iU7VHnt1mT6NibTuUlPL6Yb0/+nT05puXCXCY4+TtVzT2KC8gUAWk6ch8T+JS4KgKAmeEccKrsJNt3+0LRnJNicM8E+1COvbhgJPtv97e+hdbbHi9+xfxfTgRUGVhxsuYoD5YucKzeyu1mUjA3lE8qO01fS/3Jzb/gX9UrHRXX99s9pFxISlE8o2KfLR+/XDx6K23r818/SJNlD+YSSTz60erO3XNDDvdDyDVu/AKF8Qsknn2n1TNj6hQflE8pY8tmtnglbv/CgfEIZS76frt3RB2QQDGf+x7sYSDhQPqGMJZ/NeIcjUw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lEwrlkw/lE8REXvdM+cKF8gni3vAvavaWC1ookxdavlHXb/+cDvFrKF+4UD5h9H59dZR8rceH0j5+KF+4UD5h2K1fvlYPUL5woXwCMa1fvlYPUL5woXwCQev3SsfFvK0ewAEZEiaUTyhXbtxL/yNSoXwWV67dUtsODqq31u9XVQvb1SOvbmAySHltm5q7rl+XxdDVm2npxAflS+k5cUFNn9+myhv6VPXKI2pW81m9v8RMfbDsUQYoi2nzWlXnocG0lOKC8iXUthxQ5Ys6k0I/460MTHZBmaBs5jT3paUVDyUvH1o8FK6v4JlwUr20S+08HNeR25KWD/t42NRkixd+sClaluwLxrQPWNLyYYce+xW+wmbCS2Vjv9q072xaevIpaflwVBM79r6CZsJLTdMX6rW18ez7lbR8OJ3Ao5pyMuvDAVWxoC0tPfmUtHw4p+QrZCbcoMxigfJ5CpgJN5QvEiifvFC+SKB88kL5IoHyyQvliwTKJy+ULxIon7xQvkigfPJC+SKB8skL5YuEEOUbun5Xx9cvhAA8J9TXbypC+SKhUPlu3hn2itF//qoeH/66/VBR8T23e65QvrFD+SKhUPnMk6Hd7pAF+ColxCuksoYuX9ahfJFQqHymhdt8bGhUdwDJgN19SfcPupuvRcwVyjd2KF8kFCofAk5fujHyGSICn5imm/mM4Ls2bqto5DPfNUBkezgjO3DHYaS3sfvb02ow/9vzhrgrEF9Ljs827srJnlbg9i8klC8SJiKf2zKhsqJy4X9gV153WFRSM6wJsCszhgfu94A9jNvfVGgjkV3B3e/bYptuZjh3+twViCufO27Iao8D2MvEFt90KySULxImIp+pPKYlggSmMuKvLQUwFc+0IG6lQ39gPrtiIW7r4xvGBN1tORD3+7kE8Inrjs+Wzx2vG3vFZMcVuJBQvkiYiHxuhQOmsppKjWFMRcb/6Gc+58KMP5dYwIhsj8tuVRBU7Fy48plpc79vjxPYMtrimOmw+9vBcLmgfJTPW8D5YiqgqXymuy2mu9bPV1FNxiOfiZEImPHacuTKWPLZ043h7HlA7PHnmycM535/sqF8kTBR+UwFxV9XFFM50d2WxRbTHt6NT75837WF8H3fzVjymd/CX4zTFd7+rXzThe8CX7+JhvJFwkTlM2t84FZOU+GA2yJACmBXelRcU5ntYWyBTDfz2f7fCGCmw4jlThcw/48lH4LfM/PhDmPLZ4YF5jOGxzDmf2DPC4LPuVrLfKF8kTBR+RBUMOBWIltMu7sJKq6Nr2Ki4tsSA3sYI4/BlgGxp8FgS5RPPtPfnTbElQ/BcDbuMnHB+O3+hYTyRcJk5GOyCeWLBMonL5QvEiifvFC+SKB88kL5IoHyyQvliwTKJy+ULxIon7xQvkigfPJC+SKB8skL5YuE8lq8lZavCJOSZ9cO6DKLhZKWb+66fr4cU1Bqmo7y5ZixgNdCl9XztdBSUsXXQscDXq4/fT43PSUEm5woqx8vX0tLTz4lLR/oPDSoqpZ0eQucCSfVdbvV1gPn0lKLg5KXD8xp7tMCsgUML2jxIN7Lq3vU8P37aYnFAeVLQQuIzZrKZL+ipukL/fJ9X2Vgih8Ih4Mr2MdDmaDFi008QPkssA+IHXocUatY0KbPKTFTH5xOQBmgLGLax3OhfIRkBOUjJCMoHyEZQfkIyQjKR0hGUD5CMoLyEZIRlI+QjKB8hGQE5SMkIygfIRlB+QjJCMpHSEZQPkIygvIRkhGUj5CMoHyEZATlIyQTlPp/KTnqzRjkx6YAAAAASUVORK5CYII=)

#### What you can lean in this project:-

	Note: Whole communication is happened using websocket only, 
	No were HTTP protocol is used.

**Base**

- Angular reactive form validation.
- Validation on Image by Size, Extension, and MIME Type (Advanced).
- Ng-Routes.
- Ngrx-Bootstrap.
- Event-Emitter.
- Subscriber.
- Observable.
- Angular Service.
- Modular components.
- Directives.

**Main Features**

- User login.
- Signup.
- Manage logged-in user session.
- Auto login.
- Check real time user status, whether user is online or offline.
- Last seen.
- One on one Chat. (Upcoming).
- Group chat. (Upcoming).

#### How to run this project:- (steps 3)

1. **What things are required before going to setup:-**

- Node &lt;= 6.11
- Angular CLI
- XAMPP/LAMPP (Included PHP, MySQL, phpMyAdmin, and Apache2) **(Recommend).**

**OR**

- PHP &lt;= 6 (web service written with POD connection).
- MySQL &lt;= 5.
- Apache2.



2. **How to setup:-**

	- Just copy and paste **2 projects(Frontend and Messaging)** as it is in one directory (You can keep separate directory, if you want).

	- . Open terminal -&gt; cd to Frontend directory -&gt; **npm install**
	- . Open terminal -&gt; cd to Messaging directory -&gt; **npm install**

You&#39;re Frontend and Messaging is ready to run, Hold on there is one more project is left to setup.

3. Now **host your Webservice**

	- Steps for XAMPP installed.
	-  Open &quot; **XAMPP Control Panel**&quot; (With Admin Rights) and Start Apache and MySQL service and after that it will converted in green color if everything is normal.
	- Navigate to XAMPP installed directory (By default C:\xampp\htdocs)
	- And paste as it is in side htdocs. (you can create folder inside)
	- Inside project, you will find **&quot;websocket.sql&quot;** file that is database file to create schema in MySQL.
	- To import, open browser and hit this url **(localhost/phpmyadmin)**

And create one database and import inside that DB.

1. **How to run:-**

- **Checking the configuration**
  - Open Frontend/src/app/ services/ web-socket/web-socket.service.ts And find **private url = &#39;http://localhost:3000&#39;;** Make sure this is your Messaging url address, Is same as this if not then change it.
  - Open Messaging/app.js And find **var apiUrl  = &quot;http://localhost/websocket\_apis&quot;;** Make sure this is your hosted webservice url address, If not then change it.

- **Run your project**
  - Open terminal cd to Frontend -&gt; ng serve You can build prod version also and host that. (Optional).
  - Open terminal cd to Messaging -&gt; node app.js


**Congratulation you&#39;re done.**
**If you find any difficulties or need some help, don&#39;t heisted to contact me.**

**Thanks**

**Vishal Patel**

**vishal92\_patel@yahoo.com**