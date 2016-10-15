---
layout: page
title: Get PMMP
description:
image:
nav-menu:
---

<section id="main" class="container">
    <header>
        <h2>Get PMMP</h2>
        <p>Install PocketMine on your server.</p>
    </header>
    <div class="row">
        <div class="12u">
        <!-- Text -->
            <section class="box">
                <h3>Heads Up!</h3>
                <p>PMMP is currently under heavy development and there is <strong>no stable build</strong> available as of yet. All installations are hereby provided as-is and <strong>should not</strong> be used on production servers.</p>
                <hr>
                <p>These instructions are currently for Linux only. Official support for other platforms will be added when we release a stable release.</p>
                <h4><strong>Step 1: Install PocketMine</strong></h4>
                <h5><strong>Install using Git</strong></h5>
                <p><a href="http://pmmp.readthedocs.io/en/rtfd/installation.html#installing-manually" target="_blank">Read the documentation.</a></p>
                <h5><strong>Install completely manually</strong></h5>
                <p>
                Install the dependencies necessary to compile and run the code. You may have to install <code>perl gcc g++ make automake libtool autoconf m4</code>. If you want to compile from <em>x86_64</em>, you might have to install <code>gcc-multilib</code>.<br/>
                Navigate where you want to install PocketMine-MP. <br/>
                Clone the latest version of the <a href="https://github.com/pmmp/PocketMine-MP/archive/master.zip" target="_blank">master branch</a>. Be sure to also grab the proper versions of <a href="https://github.com/pmmp/RakLib" target="_blank">RakLib</a>, <a href="https://github.com/pmmp/PocketMine-SPL" target="_blank">SPL</a> and <a href="https://github.com/PocketMine/PocketMine-MP-GUI/" target="_blank">GUI</a>.<br/>
                Extract <code>master.zip</code>, navigate into the directory and extract the contents of RakLib, SPL and GUI into <code>src/raklib</code>, <code>src/spl</code> and <code>src/pocketmine/gui</code> respectively.<br/>
                Run <code>./start.sh</code>, PocketMine-MP will now start.<br/>
                </p>
                <h4><strong>Step 2: Customize server settings</strong></h4>
                <p>In the folder where PocketMine-MP has been installed, open the <code>server.properties</code> file with a normal text editor.</p>
                <h4><strong>Step 3: Allow connections from the rest of the world</strong></h4>
                <p>
                If you are setting up PocketMine-MP on a home network, you have to port forward the PocketMine-MP UDP (and TCP if using RCON) port on your router.<br>
                If you don't know how to do port-forwarding, go to <a href="http://portforward.com/" target="_blank">Port Forward</a>, search your router, and follow the instructions.
                </p>
            </section>
        </div>
    </div>
</section>
